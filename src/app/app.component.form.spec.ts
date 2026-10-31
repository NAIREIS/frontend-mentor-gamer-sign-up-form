import { FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent password confirmation', () => {
  it('unsubscribes from password changes when destroyed', () => {
    const component = new AppComponent(new FormBuilder());
    const password = component.form.get('password')!;
    const confirmPassword = component.form.get('confirmPassword')!;

    password.setValue('ValidPassword123!');
    confirmPassword.setValue('ValidPassword123!');

    const onDestroy = (component as AppComponent & { ngOnDestroy?: () => void }).ngOnDestroy;
    onDestroy?.call(component);
    password.setValue('ChangedPassword123!');

    expect(confirmPassword.hasError('passwordMismatch')).toBeFalse();
  });

  it('rejects callsigns containing unsupported characters', () => {
    const component = new AppComponent(new FormBuilder());
    const callsign = component.form.get('callsign')!;

    callsign.setValue('Vortex 07');

    expect(callsign.hasError('pattern')).toBeTrue();
  });

  it('rejects callsigns longer than 20 characters', () => {
    const component = new AppComponent(new FormBuilder());
    const callsign = component.form.get('callsign')!;

    callsign.setValue('VortexOperatorName123');

    expect(callsign.hasError('maxlength')).toBeTrue();
  });

  it('revalidates confirmation whenever the password changes', () => {
    const component = new AppComponent(new FormBuilder());
    const password = component.form.get('password')!;
    const confirmPassword = component.form.get('confirmPassword')!;

    password.setValue('ValidPassword123!');
    confirmPassword.setValue('ValidPassword123!');
    expect(confirmPassword.hasError('passwordMismatch')).toBeFalse();

    password.setValue('ChangedPassword123!');
    expect(confirmPassword.hasError('passwordMismatch')).toBeTrue();

    password.setValue('ValidPassword123!');
    expect(confirmPassword.hasError('passwordMismatch')).toBeFalse();
  });
});
