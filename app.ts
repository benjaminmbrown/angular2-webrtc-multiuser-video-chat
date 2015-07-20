/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, Template, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
@Component({
	selector:'todo-app'
})
@View({
	templateUrl: 'tpl/todo.html',
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
 
	addTodo(todo:string){
		this.todos.unshift({ text: todo, done: false });

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