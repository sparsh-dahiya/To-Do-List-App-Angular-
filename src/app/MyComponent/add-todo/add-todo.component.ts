import { Component,Output,EventEmitter, OnInit  } from '@angular/core';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';
import {Todo} from 'src/app/Todo'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  ngOnInit(): void {
   
    
  }
  title:string;
  desc:string;
  localItem:string;
  todos:any;
  display=false;
  

  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();

  

  onSubmit(){
    const todo={
      sno:1,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
    
  }

  showAll(){
      this.display=!this.display;
      this.localItem=localStorage.getItem('todos');
      if(this.localItem==null){
        this.todos=[]
      }else{
        this.todos=JSON.parse(this.localItem);
      }
  }
    
    
    
    

    
  
}
