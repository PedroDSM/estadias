import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Umodel';
import { RegistroServiceService } from 'src/app/peticiones/registro-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:User = {
    nombre: "",
    roles_id: 2,
    email: "",
    password: "",
  };
  error = false

  constructor(private peticion: RegistroServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.peticion.create(this.user).subscribe(
      respuesta =>{
          this.router.navigate(['/Inicio']);
          alert(respuesta.message)
      },
      error=>{
        this.error = true
        alert(error.error.error)
      })
  }
}
