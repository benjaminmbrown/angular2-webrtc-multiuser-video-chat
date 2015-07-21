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
	room: string;


	constructor(){
		this.room = location.search && location.search.split('?')[1];

		

		webrtc.on('readyTocall',function(){
			if (room) webrtc.joinRoom(room);
		});
	}
 

	
	doneTyping($event){
		if($event.which ===13){
			this.addTodo($event.target.value);
			$event.target.value = null;
		}
	}
}

bootstrap(MultiChatComponent);