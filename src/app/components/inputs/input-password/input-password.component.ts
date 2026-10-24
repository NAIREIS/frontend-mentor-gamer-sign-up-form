import { Component } from '@angular/core';
import { BaseInputComponent } from '../base-input/base-input';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.sass']
})
export class InputPasswordComponent extends BaseInputComponent<string> {

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.updateValue(input.value);
  }

  handleBlur(): void {
    this.markAsTouched();
  }


  onErrors(): string[] {
   return this.errors
  }

  get passwordStrength(): string {
  const password = this.value;

  if (!password) {
    return '';
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) return 'weak';
  if (score <= 3) return 'medium';
  if (score <= 4) return 'good';

  return 'strong';
}

}