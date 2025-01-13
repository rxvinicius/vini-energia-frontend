import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/shared/Loader';
import { SignupValidation } from '@/lib/validations/user';
import authService from '@/api/rest/authService';
import { login } from '@/redux/user/slice';
import useToasts from '@/hooks/useToasts';
import PasswordInput from '../components/PasswordInput';

import { projectLogo } from '@/assets/images';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { successToast, errorToast } = useToasts();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    setIsLoading(true);

    authService
      .register({
        email: values.email,
        name: values.name,
        password: values.password,
      })
      .then((response) => {
        const { data } = response;

        if (data.success) {
          successToast({
            title: 'Conta criada com sucesso!',
            description:
              'Aguarde, dentro de instantes você será redirecionado.',
          });
          dispatch(login(data.user));
          navigate('/');
        } else {
          errorToast({});
        }
      })
      .catch((error) => {
        let title;
        let description;

        if (error.response.status === 409) {
          title = 'Email já em uso';
          description =
            'Por favor, tente usar um email diferente ou faça login se você já tiver uma conta.';
        }

        errorToast({ title, description });
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src={projectLogo} alt="Logo da empresa" width={220} />

        <h2 className="h2-bold">Criar uma nova conta</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2 text-center !leading-7">
          Cadastre-se para comprar energia até <br />
          <span className="text-dark-2 !font-bold">40% mais barata</span> para
          sua empresa
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="shad-button_primary mt-1"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader size="small" />
              </div>
            ) : (
              'Cadastre-se'
            )}
          </Button>

          <p className="text-dark-1 text-center mt-2">
            Tem uma conta?&nbsp;
            <Link to="/sign-in" className="text-primary font-semibold">
              Conecte-se
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
