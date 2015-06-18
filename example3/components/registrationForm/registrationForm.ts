/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {formDirectives, FormBuilder, Control, ControlGroup, Validators} from 'angular2/forms';
import {Customer} from '../../models/customer';
import {Address} from '../../models/address';
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
        this.customer.address = new Address();
        this.theForm = new ControlGroup({
            userName: new Control("A", Validators.required),
            firstName: new Control("B", Validators.required),
            lastName: new Control("C", Validators.required),
            address: new ControlGroup({
                address1: new Control("D", Validators.required),
                address2: new Control("E"),
                city: new Control("F", Validators.required),
                state: new Control("G", Validators.required),
                postalCode: new Control("12345", validPostalCode),
            }),
            emailAddress: new Control("I", Validators.required),
            phone: new Control("123-456-7890", validPhoneNumber)
        });
    }

    register() {
        console.log(this.theForm);
        console.log(this.customer);
    }
}
