import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifyComponent } from './modify/modify.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"home" ,component:HomeComponent},
  {path:"add" ,component:AddComponent},
  {path:"galerie" ,component:GalleryComponent},
  {path:"login" ,component:LoginComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"modify" ,component:ModifyComponent},
  {path:"" ,component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
