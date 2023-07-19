import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CardValidators {
  static title(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value.length < 3 && value.length >= 1) {
      return {
        minlength: {
          message: 'The title is too short',
        },
      };
    }

    if (value.length > 20) {
      return {
        maxlength: {
          message: 'The title is too long',
        },
      };
    }

    if (value.length < 1) {
      return {
        required: {
          message: 'Required',
        },
      };
    }

    return null;
  }

  static description(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value && value.length > 255) {
      return {
        maxlength: {
          message: 'The description is too long',
        },
      };
    }

    return null;
  }

  static coverImage(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!/^https?:\/\/.+/.test(value) && value.length > 0) {
      return {
        url: {
          message: 'The image link is invalid',
        },
      };
    }

    if (value.length === 0) {
      return {
        required: {
          message: 'Required',
        },
      };
    }

    return null;
  }

  static videoLink(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!/^https?:\/\/.+/.test(value) && value.length > 0) {
      return {
        url: {
          message: 'The video link is invalid',
        },
      };
    }

    if (value.length === 0) {
      return {
        required: {
          message: 'Required',
        },
      };
    }

    return null;
  }

  static creationDate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const now = new Date();

    const inputDate = new Date(value);

    if (inputDate > now) {
      return {
        date: {
          message: 'The date is invalid',
        },
      };
    }

    if (value.length === 0) {
      return {
        required: {
          message: 'Required',
        },
      };
    }

    return null;
  }
}
