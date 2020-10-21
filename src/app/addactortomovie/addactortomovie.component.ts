import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  name: string= "";
  title:string ="";
  constructor(private dbService: DatabaseService, private router: Router) { }
  selectActor(item){
    this.name=item.name;

  }
  selectMovie(item){
    this.title = item.title;

  }
  onaddAToM(){
    this.dbService.addActToMov(this.name,this.title).subscribe(result => {
      this.router.navigate(['/listmovies']);
    });
  }

  ngOnInit(){
    console.log('Add actor to movie WORK');
    //get all actors
    this.dbService.getActors().subscribe((data: any[])=>{
      this.actorsDB=data;
    });
    //get all movies
    this.dbService.getMovies().subscribe((data: any[])=>{
      this.moviesDB=data;
    })
  }
  

}
