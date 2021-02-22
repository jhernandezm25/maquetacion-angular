import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-contac-us",
  templateUrl: "./contac-us.component.html",
  styleUrls: ["./contac-us.component.css"],
})
export class ContacUsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  userInfo = {
    email: "",
    userName: "",
    phoneNumber:"",
    message:""
  };
  userInfoValidator = {
    email: false,
    userName: false,
    phoneNumber:false,
  };
  variableTemporal = {};
  registrar() {
    if (this.userInfo.email.trim() === "") {
      console.log("email esta vacio");
      this.userInfoValidator.email = true;
    } else {
      this.userInfoValidator.email = false;
    }
    if (this.userInfo.userName.trim() === "") {
      console.log("userName esta vacio");
      this.userInfoValidator.userName = true;
    } else {
      this.userInfoValidator.userName = false;
    }
    if(this.userInfo.phoneNumber.trim()===""){
      console.log("phone number is empty")
      this.userInfoValidator.phoneNumber=true;
    }else{
      this.userInfoValidator.phoneNumber=false;
    }
    if (
      this.userInfo.userName !== "" &&
      this.userInfo.email !== "" && this.userInfo.phoneNumber!==""
    ) {
      //puedo servir para hacer consultas a api's a BD o Consumir servicios
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      this.router.navigate(["/"]);
      alert(`${this.userInfo.userName} tús datos han sido registrados con exito.`);
    }
    // localStorage.clear()
    this.variableTemporal = localStorage.getItem("userInfo");
    console.log("temp", this.variableTemporal);
    console.log(" esto es la informacion del usuario ", this.userInfo);
    console.log("esto es la validación de los datos", this.userInfoValidator);
  }
}
