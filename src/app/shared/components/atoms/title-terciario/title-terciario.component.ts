import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-terciario',
  templateUrl: './title-terciario.component.html',
  styleUrl: './title-terciario.component.css'
})
export class TitleTerciarioComponent {
  @Input() titleText: string = 'Registro';
}
