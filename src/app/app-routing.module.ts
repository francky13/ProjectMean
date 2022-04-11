import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterRestaurantComponent } from './components/register-restaurant/register-restaurant.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './Pages/home/home.component';
import { PlatComponent } from './Pages/plat/plat.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registerRestaurant', component: RegisterRestaurantComponent },
  { path: 'plat', component: PlatComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
