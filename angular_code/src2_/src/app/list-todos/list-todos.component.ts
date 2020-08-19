import { Component, OnInit } from '@angular/core';

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
  //for custome class
  todos = [ new Todo(1,'Learn to Dance','a@gmail.com',true,new Date()),
  new Todo(2,'Learn to Dance','b@gmail.com',false,new Date()),
  new Todo(3,'Learn to Dance','c@gmail.com',false,new Date()),
  new Todo(4,'Learn to Dance','d@gmail.com',true,new Date()),
  new Todo(5,'Learn to Dance','e@gmail.com',true,new Date()),
]
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

  constructor() { }

  ngOnInit(): void {
  }

}
