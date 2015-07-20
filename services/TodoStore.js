export class TodoStore{
//constructor creates simple array to hold todo list items
//this is used in the template to render the todo items.
	constructor(){
		this.todoList = [];
	}
//add is called every time a todo is created and every new item added is automatically set to incomlplete (done:false)
	add(item){
		this.todoList.unshift({text:item, done:false});
	}

}