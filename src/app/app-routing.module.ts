import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HardskillComponent } from './components/hardskill/hardskill.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'sobremi', component: SobremiComponent },
  { path: 'hardskill', component: HardskillComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
