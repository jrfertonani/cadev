import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';

import { DevComponent } from './components/views/dev/dev.component';
import { DevCreateComponent } from './components/views/dev/dev-create/dev-create.component';

import { TarefasComponent } from './components/views/tarefas/tarefas.component';
import { TarefasCreateComponent } from './components/views/tarefas/tarefas-create/tarefas-create.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'dev',component: DevComponent},
  {path: 'dev/create', component: DevCreateComponent},
  {path: 'dev/delete/:id', component: DevComponent},
  {path: 'dev/update/:id', component: DevCreateComponent},

  {path: 'tarefas', component: TarefasComponent},
  {path: 'tarefas/create', component: TarefasCreateComponent},
  {path: 'tarefas/delete/:id', component: TarefasComponent},
  {path: 'tarefas/update/:id', component: TarefasCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
