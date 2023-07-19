import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AuthValidators {
  static passwordStrength(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    const regexPatterns = [/[a-z]/, /[A-Z]/, /\d/, /[!@#?]/];

    const isValid = regexPatterns.every((pattern) => pattern.test(value));

    if (!isValid) {
      const missingCriteria = [];
      if (!/[a-z]/.test(value)) {
        missingCriteria.push('lowercase letters');
      }
      if (!/[A-Z]/.test(value)) {
        missingCriteria.push('uppercase letters');
      }
      if (!/\d/.test(value)) {
        missingCriteria.push('numbers');
      }
      if (!/[!@#?]/.test(value)) {
        missingCriteria.push('special characters (!@#?)');
      }
      if (value.length < 8) {
        missingCriteria.push('at least 8 characters');
      }

      const message = "Your password isn't strong enough.  (" + missingCriteria.join(', ') + ').';

      return {
        passwordStrength: {
          message: message,
        },
      };
    }

    return null;
  }
}
