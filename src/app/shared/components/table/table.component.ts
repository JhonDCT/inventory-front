import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() rows: unknown[];
  @Input() columns: { key: string; header: string }[];

  constructor() {}

  ngOnInit(): void {
    this.columns = [
      {
        key: "name",
        header: "Page name",
      },
      {
        key: "visitors",
        header: "Visitors",
      },
      {
        key: "users",
        header: "Unique users",
      },
      {
        key: "bounce",
        header: "Bounce rate",
      },
    ];

    this.rows = [
      {
        name: "argon",
        visitors: "4,569",
        users: "340",
        bounce: "46,53%",
      },
    ];
  }
}
