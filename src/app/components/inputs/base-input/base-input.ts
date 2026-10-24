import { Directive, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive()
export abstract class BaseInputComponent<T>
  implements ControlValueAccessor {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;

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


  protected onChange: (value: T | null) => void = () => {};
  protected onTouched: () => void = () => {};

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


  get errors(): string[] {
    const control = this.ngControl?.control;

    if (!control || !control.errors || !(control.touched || control.dirty)) {
      return [];
    }

    const messages: Record<string, string> = {
      required: 'Campo obrigatório',
      email: 'E-mail inválido',
      minlength: `Mínimo de ${control.errors['minlength']?.requiredLength} caracteres`,
      maxlength: `Máximo de ${control.errors['maxlength']?.requiredLength} caracteres`,
      pattern: 'Formato inválido'
    };

    return Object.keys(control.errors).map(
      error => messages[error] ?? 'Campo inválido'
    );
  }
}
