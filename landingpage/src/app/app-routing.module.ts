import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path: 'home', component: HomeComponent},
 {path: 'footer', component: FooterComponent},
{path: 'about', component: AboutComponent}];
=======
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
];
>>>>>>> 03297db1a8ae7abb19bd5a3e49f8517d0f20240a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
