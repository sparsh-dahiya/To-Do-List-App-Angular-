import { outputAst } from '@angular/compiler';
import { EventEmitter } from '@angular/core';
import { Component,Input,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { NgConfirmService } from 'ng-confirm-box';




@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo:Todo;
  @Input() i:number;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo>=new EventEmitter();
  icon=faTrash
  constructor( private confirmService:NgConfirmService){}
  
  onClick(todo:Todo){
   this.confirmService.showConfirm("Are You Sure to delete",
   ()=>{
    this.todoDelete.emit(todo);
   },
   ()=>{})
   
      
    
    
  }
  onCheckboxClick(todo){
    this.todoCheckbox.emit(todo);
  }
  
}
