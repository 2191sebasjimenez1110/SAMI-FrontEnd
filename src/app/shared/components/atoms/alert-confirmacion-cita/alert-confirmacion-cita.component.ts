import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alert-confirmacion-cita',
  templateUrl: './alert-confirmacion-cita.component.html',
  styleUrl: './alert-confirmacion-cita.component.css'
})
export class AlertConfirmacionCitaComponent {
  mostrarAlerta() {
    Swal.fire({
      position: "center",
      text: "Tu cita ha cido agendada con exito",
      showConfirmButton: false,
      width:500,
      heightAuto:true,
      background:"#EAFBE7",
      showCloseButton:true,
      
    });
  }
}
