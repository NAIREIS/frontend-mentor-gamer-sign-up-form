import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(
  passwordKey: string = 'password',
  confirmPasswordKey: string = 'confirmPassword'
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    const password = control.parent?.get(passwordKey)?.value
    const confirmPassword = control.parent?.get(confirmPasswordKey)?.value

  
    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword
      ? null
      : { passwordMismatch: true };
  };
}