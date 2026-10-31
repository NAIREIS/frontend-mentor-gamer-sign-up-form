import { Component, Input } from '@angular/core';
import { BaseInputComponent } from '../base-input/base-input';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.sass']
})
export class InputCheckboxComponent extends BaseInputComponent<boolean> {

  checked = false;

  override writeValue(value: boolean | null): void {
    this.checked = value ?? false;
    super.writeValue(this.checked);
  }

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement
    this.checked = input.checked;
    this.updateValue(this.checked);
    this.markAsTouched();
  }
}
