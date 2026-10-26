import { Component, Input } from '@angular/core';
import { BaseInputComponent } from '../base-input/base-input';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.sass']
})
export class InputCheckboxComponent extends BaseInputComponent<boolean> {

  checked = false;

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement
    this.checked = input.checked;
    this.onChange(this.checked);
    this.onTouched();
  }
}
