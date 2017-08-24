import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: '', redirectTo: '/login', pathMatch: 'full' }
	/*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash: true})
  ],
   exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
