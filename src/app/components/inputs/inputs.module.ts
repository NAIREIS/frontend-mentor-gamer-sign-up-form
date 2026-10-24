import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordComponent } from './input-password/input-password.component';

@NgModule({
  declarations: [InputTextComponent, InputPasswordComponent],
  imports: [
    CommonModule,
  ],
 
  exports: [InputTextComponent,InputPasswordComponent],
})
export class InputsModule { }
