/// <reference path="../typings/tsd.d.ts" />

import {Control} from 'angular2/angular2';

export function validPhoneNumber(c: Control){
    if(!c.value.match(/\d\d\d-\d\d\d-\d\d\d\d/)){
        return {invalidPhone: true};
    }
    return null;
} 
