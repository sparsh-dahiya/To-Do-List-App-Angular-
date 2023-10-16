import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';


import { TodosComponent } from './MyComponent/todos/todos.component';


const routes: Routes = [
  {path : 'todos' ,component:TodosComponent},
  {path: '' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
