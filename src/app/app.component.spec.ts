import { ReactiveFormsModule } from '@angular/forms';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ButtonsModule } from './components/buttons/buttons.module';
import { InputsModule } from './components/inputs/inputs.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, InputsModule, ButtonsModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should keep the project title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('frontend-mentor-gamer-sign-up-form');
  });

  it('should display readiness from zero to five valid fields', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.brand__readiness')?.textContent).toContain('0/5 READY');

    component.form.setValue({
      callsign: 'NeonRaider_99',
      email: 'operator@neoncore.gg',
      password: 'NeonRaider_99Pass123!',
      confirmPassword: 'NeonRaider_99Pass123!',
      acceptTerms: true
    });
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.brand__readiness')?.textContent).toContain('5/5 READY');
  });

  it('should color required and password mismatch status red like the input error', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.form.setValue({
      callsign: 'NeonRaider_99',
      email: 'operator@neoncore.gg',
      password: 'NeonRaider_99Pass123!',
      confirmPassword: 'DifferentPassword123!',
      acceptTerms: false
    });
    component.form.get('confirmPassword')?.markAsTouched();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const confirmStatus = compiled.querySelector('[data-status-control="confirmPassword"]') as HTMLElement;
    const termsStatus = compiled.querySelector('[data-status-control="acceptTerms"]') as HTMLElement;
    const dangerColor = 'rgb(255, 131, 122)';

    expect(confirmStatus.textContent).toContain('MISMATCH');
    expect(getComputedStyle(confirmStatus).color).toBe(dangerColor);
    expect(termsStatus.textContent).toContain('REQUIRED');
    expect(getComputedStyle(termsStatus).color).toBe(dangerColor);
  });

  it('should render the brand divider and uppercase the signup requirement', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const divider = fixture.nativeElement.querySelector('.brand__status-decoration') as HTMLElement;
    const subtitle = fixture.nativeElement.querySelector('.signup__subtitle') as HTMLElement;

    expect(divider.getBoundingClientRect().width).toBeGreaterThan(24);
    expect(getComputedStyle(divider).backgroundColor).toBe('rgb(91, 107, 126)');
    expect(getComputedStyle(subtitle).textTransform).toBe('uppercase');
  });

  it('should show the success message after a valid signup', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.form.setValue({
      callsign: 'NeonRaider_99',
      email: 'operator@neoncore.gg',
      password: 'NeonRaider_99Pass123!',
      confirmPassword: 'NeonRaider_99Pass123!',
      acceptTerms: true
    });

    component.submit();
    tick(500);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.signup__success-title')?.textContent).toContain('HANDSHAKE COMPLETE');
    expect(compiled.querySelector('.signup__success-message')?.textContent).toContain('NeonRaider_99');
    expect(compiled.querySelector('.signup__success-continue')?.textContent).toContain('CONTINUE TO LOG IN');
    expect(compiled.querySelector('.brand__status-value--success')?.textContent).toContain('PROVISIONED');
    expect(compiled.querySelectorAll('.brand__status-value')[1]?.textContent).toContain('LOCKED');
  }));
});
