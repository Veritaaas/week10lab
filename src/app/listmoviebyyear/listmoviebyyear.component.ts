import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
@Component({
  selector: "app-listmovies",
  templateUrl: "./listmoviebyyear.component.html",
  styleUrls: ["./listmoviebyyear.component.css"],
})
export class ListmoviebyyearComponent implements OnInit {
   movieDB: any[] = [];
  constructor(private dbService: DatabaseService) {}
  ngOnInit() {
    console.log("Hi From Listmovies ngIOnit");
    this.dbService.ListByY().subscribe((data: any[]) => {
      this.movieDB = data;
    });
  }
}