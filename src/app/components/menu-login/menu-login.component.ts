import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-menu-login",
  templateUrl: "./menu-login.component.html",
  styleUrls: ["./menu-login.component.css"],
})
export class MenuLoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get userIsLogged(): boolean {
    console.log("esta logueado", this.authService.isLoggedIn);
    return this.authService.isLoggedIn;
  }
  logOut(): void {
    console.log("test salir");
    console.log(this.authService.isLoggedIn);
    //this.router.navigate(['/']);
    this.authService.signOut();
  }
}
