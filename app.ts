/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, Template, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
@Component({
	selector:'multi-chat'
})
@View({
	templateUrl: 'tpl/chatroom.html',
	directives: [NgFor, NgIf];
})

class MultiChatComponent{ 
	todos: Array<string>;
	name: string;

	constructor(){
		this.name = 'Ben';
		
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

bootstrap(MultiChatComponent);