import { Directive, Input } from '@angular/core';

@Directive()
export abstract class BaseButtonComponent {
  @Input() label = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() format: 'full' | 'fit' | 'square' = 'full';
  get buttonClasses(): string[] {
    return [
      'button',
      `button--${!this.loading ? this.variant: 'secondary'}`,
      `button--${this.size}`,
      `button--${this.format}`,
      ...(this.loading ? ['button--loading'] : [])
    ];
  }
}