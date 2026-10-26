import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';

@NgModule({
  declarations: [InputTextComponent, InputPasswordComponent, InputCheckboxComponent,],
  imports: [
    CommonModule,
  ],
 
  exports: [InputTextComponent,InputPasswordComponent, InputCheckboxComponent],
})
export class InputsModule { }
