import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  userInfo = {
    email: JSON.parse(localStorage.getItem("userInfo")).email,
  };
  @Output()
  selectedItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.userInfo.email = JSON.parse(localStorage.getItem("userInfo")).email;
  }
}
