/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {todoDirective} from '../components/todoDirective/todoDirective';

@Component({
    selector: 'my-todo-app'
})
@View({
    template: '<todos></todos>',
    directives: [todoDirective]
})
class AppComponent {
    constructor(){
    }
}

bootstrap(AppComponent);