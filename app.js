var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var MultiChatComponent = (function () {
    function MultiChatComponent() {
        this.room = location.search && location.search.split('?')[1];
        webrtc.on('readyTocall', function () {
            if (room)
                webrtc.joinRoom(room);
        });
    }
    MultiChatComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    MultiChatComponent = __decorate([
        angular2_1.Component({
            selector: 'multi-chat'
        }),
        angular2_1.View({
            templateUrl: 'tpl/chatroom.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], MultiChatComponent);
    return MultiChatComponent;
})();
angular2_1.bootstrap(MultiChatComponent);
