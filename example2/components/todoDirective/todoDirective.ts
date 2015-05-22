/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, For} from 'angular2/angular2';

@Component({
    selector: 'todos'
})
@View({
    templateUrl: 'components/todoDirective/todoDirective.html',
    directives: [For]
})
export class todoDirective {
    todos:String[] = ["Give away a book", "Give away another book", "Give away yet another book"];

    addTodo(newTodo:String){
        this.todos.push(newTodo);
    }
}
