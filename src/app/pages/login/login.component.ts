import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userInfo = {
    email: "",
    password: "",
  };
  userInfoValidator = {
    email: false,
    password: false,
    userName: false,
  };
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  registrar(): void {
    if (this.userInfo.email === "") {
      console.log("email esta vacio");
      this.userInfoValidator.email = true;
    } else {
      this.userInfoValidator.email = false;
    }
    if (this.userInfo.password === "") {
      console.log(`password esta vacio`);
      this.userInfoValidator.password = true;
    } else {
      this.userInfoValidator.password = false;
    }
  }

  async login(): Promise<void> {
    this.registrar();
    if (this.userInfo.password !== "" && this.userInfo.email !== "") {
      try {
        console.log("email", this.userInfo.email.trim());
        const isLogin: any = await this.authService.signIn(
          this.userInfo.email.trim().toLowerCase(),
          this.userInfo.password
        );
        if (isLogin) {
          localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
          this.router.navigate(["/dashboard"]);
        } else {
          alert("El usuario no se encuentra registrado en el sistema");
        }
      } catch (error) {
        alert(error.message ? error.message : "Ha ocurrido un error");
        console.log("error login", error);
      }
    }
  }
}
