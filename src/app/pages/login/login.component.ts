import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userInfo = {
    email: '',
    password: '',
  };
  userInfoValidator = {
    email: false,
    password: false,
    userName: false
  };
  variableTemporal = {};
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registrar(){
    if (this.userInfo.email === ''){
      console.log('email esta vacio');
      this.userInfoValidator.email = true;
    }else{
      this.userInfoValidator.email = false;
    }
    if (this.userInfo.password === ''){
      console.log(`password esta vacio`);
      this.userInfoValidator.password = true;
    }else{
      this.userInfoValidator.password = false;
    }
    if (this.userInfo.password !== '' && this.userInfo.email !== ''){
      if (this.userInfo.email.trim() === 'jorge.hernandez@dreamcodesoft.com' && this.userInfo.password.trim() === 'Ab123456'){
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        this.router.navigate(['/dashboard']);
      }else{
        alert('El usuario no se encuentra registrado en el sistema');
      }
    }
    this.variableTemporal = localStorage.getItem('userInfo');
    console.log('temp', this.variableTemporal);
    console.log(' esto es la informacion del usuario ', this.userInfo);
    console.log('esto es la validación de los datos', this.userInfoValidator);
  }
}
