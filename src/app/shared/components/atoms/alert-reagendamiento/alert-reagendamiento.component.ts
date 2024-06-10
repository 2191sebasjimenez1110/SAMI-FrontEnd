import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alert-reagendamiento',
  templateUrl: './alert-reagendamiento.component.html',
  styleUrls: ['./alert-reagendamiento.component.css']
})
export class AlertReagendamientoComponent {
  mostrarAlerta() {
    Swal.fire({
      text: "tu cita se ha reagendado con exito",
      showConfirmButton: false,
      showCloseButton: true,
      background:"#EAFBE7",
    });
  }
}
