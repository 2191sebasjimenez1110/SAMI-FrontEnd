import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alert-cancelar-cita',
  templateUrl: './alert-cancelar-cita.component.html',
  styleUrl: './alert-cancelar-cita.component.css'
})
export class AlertCancelarCitaComponent {
  mostrarAlerta() {
    Swal.fire({
      text: "Estas seguro de cancalar tu cita?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cancelar",
      width:500,
      heightAuto:true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Cita cancelada!",
          icon: "success",
          timer: 2000,
          timerProgressBar:true,
        });
      }
    });
  }
}
