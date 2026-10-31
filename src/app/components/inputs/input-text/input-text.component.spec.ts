import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextComponent]
    });
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign a unique input id to each instance', () => {
    const first = new InputTextComponent(null!);
    const second = new InputTextComponent(null!);

    expect(first.inputId).not.toBe(second.inputId);
  });

  it('should render the configured placeholder', () => {
    component.placeholder = 'e.g. Vortex_07';
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.placeholder).toBe('e.g. Vortex_07');
  });
});
