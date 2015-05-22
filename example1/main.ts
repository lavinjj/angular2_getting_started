/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>{{Message}}</h1>'
})
class AppComponent {
  Message: string;
  constructor(){
    this.Message = 'My First Angular2 App';
  }
}

bootstrap(AppComponent);