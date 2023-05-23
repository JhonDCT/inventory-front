import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/domain/user/domain/user";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.user;
  }
}
