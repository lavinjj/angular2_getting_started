/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {formDirectives, FormBuilder, Control, ControlGroup, Validators} from 'angular2/forms';
import {Customer} from '../../models/customer';
import {validPostalCode} from '../../validators/postalValidator';
import {validPhoneNumber} from '../../validators/phoneValidator';

@Component({
    selector: 'register',
})
@View({
    templateUrl: 'components/registrationForm/registrationForm.html',
    directives: [formDirectives]
})
export class registrationForm {
    customer:Customer;
    theForm:ControlGroup;

    constructor() {
        this.customer = new Customer();
        var builder = new FormBuilder();
        this.theForm = builder.group({
            userName: ["", Validators.required],
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            address: builder.group({
                address1: ["", Validators.required],
                address2: [""],
                city: ["", Validators.required],
                state: ["", Validators.required],
                postalCode: ["", validPostalCode],
            }),
            emailAddress: ["", Validators.required],
            phone: ["", validPhoneNumber]
        });
    }

    register() {
        console.log(this.theForm);
    }
}
