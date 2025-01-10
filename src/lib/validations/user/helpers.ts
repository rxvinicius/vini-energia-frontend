import { z } from 'zod';

const emailSchema = z
  .string()
  .email({ message: 'E-mail inválido' })
  .max(50, { message: 'O e-mail deve ter no máximo 50 caracteres.' });

const nameSchema = z
  .string()
  .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  .max(50, { message: 'O nome deve ter no máximo 50 caracteres' });

const passwordSchema = z
  .string()
  .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  .max(50, { message: 'A senha deve ter no máximo 50 caracteres' });

export { emailSchema, nameSchema, passwordSchema };
