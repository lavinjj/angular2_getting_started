/// <reference path="../typings/tsd.d.ts" />

import {Control} from 'angular2/angular2';

export function validPostalCode(c: Control){
    if(!c.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)){
        return {invalidPostalCode: true};
    }
    return null;
} 
