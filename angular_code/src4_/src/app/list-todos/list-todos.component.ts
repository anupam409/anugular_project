import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number,
    public description: string,
    public email: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  //for custome class but hard code data
  /* todos = [ new Todo(1,'Learn to Dance','a@gmail.com',true,new Date()),
   new Todo(2,'Learn to Dance','b@gmail.com',false,new Date()),
   new Todo(3,'Learn to Dance','c@gmail.com',false,new Date()),
   new Todo(4,'Learn to Dance','d@gmail.com',true,new Date()),
   new Todo(5,'Learn to Dance','e@gmail.com',true,new Date()),
 ]*/
  /*
    todos = [
      { id: 1, description: 'Learn to Dance', email: 'a@gmail.com' },
      { id: 2, description: 'Learn to Dance', email: 'b@gmail.com' },
      { id: 3, description: 'Learn to Dance', email: 'a@gmail.com' },
      { id: 4, description: 'Learn to Dance', email: 'b@gmail.com' },
      { id: 5, description: 'Learn to Dance', email: 'c@gmail.com' }
    ]*/
  // todo ={
  //   id:1,
  //   description:'Learn to Dance'
  // }
// custom data from backend
  todos: Todo[]
  message: string
  constructor(
    private serviceTodoService: TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refreshTodo();
  }

  deleteTodo(id) {
    this.serviceTodoService.deletTodo('anupam', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Todo ${id} Successfully`
        this.refreshTodo();
      }
    )

  }
  updateTodo(id) {
    this.router.navigate(['todos',id]);
    console.log(id);
  }


  addTodo(){
    this.router.navigate(['todos',-1]);
  }
  refreshTodo() {
    this.serviceTodoService.getAllTodos('anupam').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }
}
