import { Directive, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive()
export abstract class BaseInputComponent<T>
  implements ControlValueAccessor {

  private static nextInputId = 0;

  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() information: string | null = null;
  @Input() inputId = `input-${BaseInputComponent.nextInputId++}`;
  value: T | null = null;
  disabled = false;
  touched = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }


  protected onChange: (value: T | null) => void = () => { };
  protected onTouched: () => void = () => { };

  writeValue(value: T | null): void {
    this.value = value;
  }

  registerOnChange(
    fn: (value: T | null) => void
  ): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected updateValue(value: T | null): void {
    this.value = value;
    this.onChange(value);
  }

  protected markAsTouched(): void {
    this.touched = true;
    this.onTouched();
  }


  get errors(): string | null {
    const control = this.ngControl?.control;

    if (!control || !control.errors || !control.touched) {
      return null;
    }

    const messages: Record<string, string> = {
      required: 'Required',
      email: 'Enter a valid email, like you@example.com',
      minlength: `Use at least ${control.errors['minlength']?.requiredLength} characters`,
      maxlength: `Use no more than ${control.errors['maxlength']?.requiredLength} characters`,
      pattern: 'Invalid format',
      passwordMismatch: "Passwords don't match",
      passwordWeak: 'Your password is too weak. Choose a stronger password',
      passwordFair: 'Add more variety to your password',
      acceptanceRequired: 'Accept the terms to continue',
    };

    const error = Object.keys(control.errors).at(-1);

    return error ? messages[error] ?? 'Invalid field' : null;
  }
}
