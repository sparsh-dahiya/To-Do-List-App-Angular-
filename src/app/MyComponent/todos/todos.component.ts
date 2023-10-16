import { Component } from '@angular/core';
import{Todo} from "../../Todo"


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    sparsh:string='dahiya';
    todos:Todo[]=[]
    localItem:string;
    display=false;
    addMessage:string | undefined;
    
    
    constructor(){
      this.localItem=localStorage.getItem('todos');
      if(this.localItem==null){
        this.todos=[]
      }else{
        this.todos=JSON.parse(this.localItem);
      }
      
    }
    deleteTodo(todo){
      console.log(todo);
      const index=this.todos.indexOf(todo);
      this.todos.splice(index,1);
      localStorage.setItem('todos',JSON.stringify(this.todos));
    }
    addTodo(todo:Todo){
      this.todos.push(todo);
      localStorage.setItem('todos',JSON.stringify(this.todos));
      this.addMessage='Todo Added Sucessfully in Your List!';
      setTimeout(()=>(this.addMessage=undefined),2000);


    }
    toggleTodo(todo:Todo){
      const index=this.todos.indexOf(todo);
      this.todos[index].active=!this.todos[index].active;
      localStorage.setItem('todos',JSON.stringify(this.todos));

    }

    

    

}
