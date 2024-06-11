import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    { name: 'Inicio', link: '/home' },
    { 
      name: 'Citas', 
      link: '/gestion-cita', 
      subMenu: [
        { name: 'Agendar Cita', link: '/agendar-cita' }, 
        { name: 'Visualizar Cita', link: '/visualizar-cita' } 
      ]
    },
    { 
      name: 'Seguimento', 
      link: '/seguimiento', 
      subMenu: [
        { name: 'Medicamentos', link: '/medicamentos' }, 
        { name: 'Notas Doctor', link: '/notas-doctor' } 
      ] 
    },
    { name: 'Médicos', link: '/doctors' },
  ];    

  constructor(private router: Router) {}

  navigate(link: string, event: MouseEvent) {
    if (link) {
      event.stopPropagation();  // Prevent event propagation to parent elements
      this.router.navigate([link]);
    }
  }
}
