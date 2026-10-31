import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function mustBeAccepted(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isAccepted: boolean = control.value ?? false;

    if (isAccepted) {
      return null;
    }

    return { acceptanceRequired: true };
  };
}
