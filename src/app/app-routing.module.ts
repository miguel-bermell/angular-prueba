import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesAddComponent } from './components/services-add/services-add.component';
import { ServicesListComponent } from './components/services-list/services-list.component';

const routes: Routes = [
  { path: '', component: ServicesListComponent },
  { path: 'servicios', component: ServicesAddComponent },
  { path: 'servicios/:id', component: ServicesAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
