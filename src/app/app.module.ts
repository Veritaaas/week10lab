import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListactorsComponent } from './listactors/listactors.component';
import { AddactorComponent } from './addactor/addactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { AddactortomovieComponent } from './addactortomovie/addactortomovie.component';

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "addactortomovie", component: AddactortomovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
];
@NgModule({
  declarations: [
    AppComponent,
    DeleteactorComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    ListmoviesComponent,
    AddmovieComponent,
    DeletemovieComponent,
    AddactortomovieComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
