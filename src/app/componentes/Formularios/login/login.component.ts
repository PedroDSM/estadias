import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Umodel';
import { RegistroServiceService } from 'src/app/peticiones/registro-service.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User={
    email:"",
    password:""
  }

  constructor(private peticion: RegistroServiceService,private cookieService:CookieService, private router: Router) { }

  ngOnInit(): void {
  }
  send(){
    this.peticion.login(this.user).subscribe(
      respuesta =>{
          this.router.navigateByUrl('/Inicio');

          this.cookieService.set('token',respuesta. access_token!.token!,4,'/')
          this.router.navigate(['/Inicio']);
          alert(respuesta.message)
      },
      error=>{
        alert(error.error.error)
      })
  }
}
