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
      showCancelButton: true,
      confirmButtonColor: "#16255d",
      cancelButtonColor: "#A32020",
      confirmButtonText: "Si",
      cancelButtonText:"No",
      width:500,
      heightAuto:true,
      background:"#FDF4DC",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Cita cancelada",
          timer: 1500,
          timerProgressBar:true,
          background:"#EAFBE7",
          showConfirmButton:false,
        });
      }
    });
  }
}
