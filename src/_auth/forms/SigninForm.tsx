import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { useToast } from '@/hooks/use-toast';
import { SigninValidation } from '@/lib/validations/user';
import { login } from '@/redux/user/slice';
import authService from '@/api/rest/authService';

import { projectLogo } from '../../assets/images';

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signInFailed = (message?: string) => {
    setIsLoading(false);
    toast({
      title: 'Ops! Algo deu errado',
      description: `${
        message || 'Falha no login'
      }. Tente novamente mais tarde.`,
      variant: 'destructive',
      className: 'bg-red',
      duration: 2000,
    });
  };

  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    setIsLoading(true);

    authService
      .login({ email: values.email, password: values.password })
      .then((response) => {
        const { data } = response;

        if (data.success) {
          dispatch(login(data.user));
          navigate('/');
        } else {
          signInFailed();
        }
      })
      .catch((error) => {
        let message;
        if (error.response.status === 401) {
          message = 'Email ou senha inválidos';
        }

        signInFailed(message);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        {/* <img src={projectLogo} alt="Logo da empresa" width={320} /> */}
        <img src={projectLogo} alt="Logo da empresa" width={220} />

        <h2 className="h2-bold">Faça login na sua conta</h2>
        <p className="text-light-4 small-medium md:base-regular mt-2">
          Bem-vindo de volta! Insira os detalhes da sua conta
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="shad-input"
                    autoComplete="off"
                    {...field}
                  />
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
                  <Input type="password" className="shad-input" {...field} />
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
              'Entrar'
            )}
          </Button>

          <p className="text-dark-1 text-center mt-2">
            Não tem uma conta?&nbsp;
            <Link to="/sign-up" className="text-primary font-semibold">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
