import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { DevComponent } from './components/views/dev/dev.component';
import { DevCreateComponent } from './components/views/dev/dev-create/dev-create.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dev',component: DevComponent},
  {path: 'dev/create', component: DevCreateComponent},
  {path: 'dev/delete/:id', component: DevComponent},
  {path: 'dev/update/:id', component: DevCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
