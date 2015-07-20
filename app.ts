/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, Template, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
@Component({
	selector:'todo-app'
})
@View({
	template: "<h1>Simple Todo App in Angular 2 by {{name}}</h1>"+

				"<div *ng-for='#todo of todos'><input type='checkbox' [checked]='todo.done' (click)='toggleTodoState(todo)'/> <span [class.done]='todo.done'>{{todo.text}}</span></div>"+
				"<p><input #todotext> <button (click)='addTodo(todotext.value)'>Add ToDo</button>";
	directives: [NgFor, NgIf];
})

class TodoAppComponent{
	todos: Array<string>;

	name: string;
	//todoStore: TodoStore;

	constructor(){
		this.name = 'ben';
		this.todos = [{ text: 'Buy mom flowers', done: false }, { text: 'Grab bulls tix', done: false }, { text: 'Eat food', done: false }]; 
	}
 
	// constructor(todoStore: TodoStore){
	// 	this.name = 'Ben';
	// 	this.todoStore = todoStore;
	// }

	addTodo(todo:string){
		this.todos.unshift({ text:todo, done:false})
	//	this.todos.push(todo);
	}

	toggleTodoState(todo){
	
		todo.done = !todo.done;
	
	}
	doneTyping($event){
		if($event.which ===13){
			this.addTodo($event.target.value);
			$event.target.value = null;
		}
	}

}

bootstrap(TodoAppComponent);