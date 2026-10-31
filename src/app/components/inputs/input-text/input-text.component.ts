import { Component } from '@angular/core';
import { BaseInputComponent } from '../base-input/base-input';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.sass'],
})
export class InputTextComponent extends BaseInputComponent<string> {

  

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.updateValue(input.value);
  }

  handleBlur(): void {
    this.markAsTouched();
  }
  onErrors(): string | null {
   return this.errors
  }

}
