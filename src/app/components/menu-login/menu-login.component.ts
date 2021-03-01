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

  logOut(): void {
    this.authService.signOut();
  }
}
