import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'computer', redirectTo: 'computer/index', pathMatch: 'full'},
  { path: 'computer/index', component: IndexComponent },
  { path: 'computer/create', component: CreateComponent },
  { path: 'computer/edit/:idComputer', component: EditComponent } 
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerRoutingModule { }
