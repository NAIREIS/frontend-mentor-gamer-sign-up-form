import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'frontend-mentor-gamer-sign-up-form';

  constructor(private fb: FormBuilder) { }




  statuses = [
    { label: 'CALLSIGN', value: 'PENDING', pending: true , control: 'callsign', showText: true},
    { label: 'EMAIL', value: 'PENDING', pending: false,  control: 'email',showText: false },
    { label: 'PASSWORD', value: 'PENDING', pending: false,  control: 'password', showText: false },
    { label: 'CONFIRM', value: 'PENDING', pending: false,  control: 'confirmPassword', showText: false },
    { label: 'TERMS', value: 'REQUIRED', pending: false,  control: 'acceptTerms',showText: false }
  ];



  form = this.fb.group({
    callsign: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
    confirmPassword: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
    acceptTerms: [false, [
      Validators.required,
    ]]
  });

  submit(): void {

    this.form.get('')?.value
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
  }

}
