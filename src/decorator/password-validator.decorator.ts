import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class PasswordValidatorConstraint
  implements ValidatorConstraintInterface
{
  validate(password: string) {
    if (!password) return true;

    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) /* MAISCULA */ &&
      /[a-z]/.test(password) /* MINUSCLA */ &&
      /[\W_]/.test(password) /* NUMERO */ &&
      /\d/.test(password) /* CARACTERE */
    );
  }

  defaultMessage() {
    return 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.';
  }
}
export function IsValidPassword(opt?: ValidationOptions) {
  return function (obj: object, name: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: name,
      options: opt,
      constraints: [],
      validator: PasswordValidatorConstraint,
    });
  };
}
