import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {

  title = 'Robertos Aufgaben';

  todos = [


  ];


  addTodo(newTodoTitel) {
    const newTodo = {
      titel: newTodoTitel,
      wichtigkeit: '',
      erledigt: '',
      actions: '',
      bermerkungen: '',


    };

  this.todos.push(newTodo);

  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.titel !== todo.titel);

  }
}
