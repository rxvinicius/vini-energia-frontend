import { z } from 'zod';
import { emailSchema, nameSchema, passwordSchema } from './helpers';

const SigninValidation = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const SignupValidation = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export { SigninValidation, SignupValidation };
