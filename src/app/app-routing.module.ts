import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomaizerComponent } from './Components/randomaizer/randomaizer.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "About-Us", component: AboutUsComponent },
  {
    path: 'Random',
    component: RandomaizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
