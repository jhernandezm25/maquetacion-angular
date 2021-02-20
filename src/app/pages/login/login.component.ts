import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  userInfo = {
    email:"",
    password:"",
    userName:""
  }
  userInfoValidator = {
    email:false,
    password:false,
    userName:false
  }
  variableTemporal = {}
  registrar(){    
    // Javascript Object notation [1,2,3,4,5,65] "hola como estan"
    //validacion de email
    if(this.userInfo.email === ""){
      console.log("email esta vacio")
      this.userInfoValidator.email=true
    }else{
      this.userInfoValidator.email=false
    }
    //validacion de contraseña
    if(this.userInfo.password === ""){
      console.log("password esta vacio")
      this.userInfoValidator.password=true
    }else{
      this.userInfoValidator.password=false
    }
    //validacion de userName
    if(this.userInfo.userName === ""){
      console.log("userName esta vacio")
      this.userInfoValidator.userName=true
    }else{
      this.userInfoValidator.userName=false
    }
    if(this.userInfo.userName !== "" && this.userInfo.password !== "" && this.userInfo.email !== ""){
      //puedo servir para hacer consultas a api's a BD o Consumir servicios
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      this.router.navigate(['/'])
    } 
    // localStorage.clear()
    this.variableTemporal=localStorage.getItem('userInfo')
    console.log('temp',this.variableTemporal)
    console.log(' esto es la informacion del usuario ',this.userInfo)
    console.log('esto es la validación de los datos',this.userInfoValidator)

  }
}
/*
  *ngIf="" 
  hermanos del ngIf: Vue: v-if:true React {condition ? render() || none}
  ngFor
*/