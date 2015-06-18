/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {registrationForm} from '../components/registrationForm/registrationForm';

@Component({
    selector: 'my-registration-app'
})
@View({
    template: '<register></register>',
    directives: [registrationForm]
})
class AppComponent {
    constructor(){
    }
}

bootstrap(AppComponent);