import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { passwordMatchValidator } from './components/utils/validators/password-match.validators';
import { passwordStrengthValidator } from './components/utils/validators/password-strength.validators';
import { mustBeAccepted } from './components/utils/validators/must-be-accepted.validators';


interface Statuses {
  label: string;
  value: string;
  control: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnDestroy {

  title = 'frontend-mentor-gamer-sign-up-form';
  completed = false;
  loading = false;
  private subscriptions = new Subscription();

  constructor(private fb: FormBuilder) {
    this.subscriptions.add(
      this.form.get('password')?.valueChanges.subscribe(() => {
        this.form.get('confirmPassword')?.updateValueAndValidity();
      })
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get readyCount(): number {
    return Object.values(this.form.controls).filter(control => control.valid).length;
  }

  getStatusClass(statuses: Statuses): string {
    if (this.completed) {
      return 'brand__status-value--locked';
    }

    const control = this.form.get(statuses.control);
    if (!control || control.valid) {
      return control ? 'brand__status-value--success' : 'brand__status-value--pending';
    }

    if (control.touched || control.dirty) {
      return 'brand__status-value--error';
    }

    return 'brand__status-value--pending';
  }


  errors: Record<string, string> = {
    required: 'REQUIRED',
    minlength: 'TOO SHORT',
    maxlength: 'TOO LONG',
    pattern: 'INVALID FORMAT',
    passwordMismatch: 'MISMATCH',
    passwordWeak: 'WEAK PASSWORD',
    passwordFair: 'FAIR PASSWORD',
    acceptanceRequired: 'REQUIRED',
    email: 'MALFORMED'
  };


  getStatusError(statuses: Statuses) {

    const control = this.form.get(statuses.control)

    if (control && control.valid) {
      return 'OK'
    }

    if (!control?.errors || !(control?.touched || control?.dirty)) {
      return statuses.value;
    }

    const errorKey = Object.keys(control.errors)[0];


    return this.errors[errorKey] ?? ''
  }


  statuses: Statuses[] = [
    { label: 'CALLSIGN', value: 'PENDING', control: 'callsign' },
    { label: 'EMAIL', value: 'PENDING', control: 'email' },
    { label: 'PASSWORD', value: 'PENDING', control: 'password' },
    { label: 'CONFIRM', value: 'PENDING', control: 'confirmPassword' },
    { label: 'TERMS', value: 'REQUIRED', control: 'acceptTerms' }
  ];



  form = this.fb.group({
    callsign: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[A-Za-z0-9_-]+$/)
    ]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', [
      Validators.required,
      Validators.minLength(8),
      passwordStrengthValidator(),
    ]],
    confirmPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      passwordMatchValidator()
    ]],
    acceptTerms: [false, [
      mustBeAccepted()
    ]]
  },);

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }

    this.loading = true

    setTimeout(() => {
      this.loading = false
      this.completed = true
    }, 500);

  }

}
