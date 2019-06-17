import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomaizerComponent } from './Components/randomaizer/randomaizer.component';

const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  {
    path: 'Home',
    component: RandomaizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
