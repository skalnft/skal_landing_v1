import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'about', component: AboutComponent }, 
{ path: '', redirectTo: '/home', pathMatch: 'full' }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
