import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-alert-reagendamiento',
  templateUrl: './alert-reagendamiento.component.html',
  styleUrl: './alert-reagendamiento.component.css'
})
export class AlertReagendamientoComponent {
  mostrarAlerta() {
    Swal.fire({
      text: "Tu cita a sido reagendada con exito",
      icon: "success",
      width:500,
      heightAuto:true,
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        icon: 'custom-icon'
      }
    });
  }
}
