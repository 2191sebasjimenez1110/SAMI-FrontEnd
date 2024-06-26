import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRoleStyle]'
})
export class RoleStyleDirective implements OnChanges {
  @Input() appRoleStyle: string = '';
  @Input() adminClass: string = '';
  @Input() patientClass: string = '';
  @Input() doctorClass: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appRoleStyle']) {
      this.updateStyle(changes['appRoleStyle'].currentValue); // Accedemos usando ['appRoleStyle']
    }
  }

  private updateStyle(role: string) {
    // Limpiamos todas las clases existentes
    this.removeClass('admin');
    this.removeClass('patient');
    this.removeClass('doctor');

    // Agregamos la clase correspondiente al rol actual
    if (role === 'admin') {
      this.addClass('admin');
    } else if (role === 'patient') {
      this.addClass('patient');
    } else if (role === 'doctor') {
      this.addClass('doctor');
    }
  }

  private addClass(className: string) {
    if (className) {
      this.renderer.addClass(this.el.nativeElement, className);
    }
  }

  private removeClass(className: string) {
    if (className) {
      this.renderer.removeClass(this.el.nativeElement, className);
    }
  }
}
