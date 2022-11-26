import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './app/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [{path:'',component:LoginComponent},
                        {path:'home',component:HomePageComponent},
                        {path:'signUp',component:SignUpComponent},
                        {path:'menu/:id',component:MenuComponent},
                        // {path:'**',pathMatch:'full',redirectTo:'home'}
                      
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
