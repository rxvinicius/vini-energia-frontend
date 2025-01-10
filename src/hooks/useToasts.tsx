import { useToast } from '@/hooks/use-toast';

type ToastProps = {
  title?: string;
  description?: string;
  duration?: number;
};

const useToasts = () => {
  const { toast } = useToast();

  const successToast = ({ title, description, duration }: ToastProps) => {
    toast({
      title: title || 'Operação realizada com sucesso',
      description,
      variant: 'destructive',
      className: 'bg-green',
      duration: duration || 2500,
    });
  };

  const errorToast = ({ title, description, duration }: ToastProps) => {
    toast({
      title: title || 'Ops! Algo deu errado',
      description: description || 'Tente novamente mais tarde.',
      variant: 'destructive',
      className: 'bg-red',
      duration: duration || 2500,
    });
  };

  return { successToast, errorToast };
};

export default useToasts;
