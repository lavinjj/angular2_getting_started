/// <reference path="../../typings/tsd.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var forms_1 = require('angular2/forms');
var customer_1 = require('../../models/customer');
var address_1 = require('../../models/address');
var postalValidator_1 = require('../../validators/postalValidator');
var phoneValidator_1 = require('../../validators/phoneValidator');
var registrationForm = (function () {
    function registrationForm() {
        this.customer = new customer_1.Customer();
        this.customer.address = new address_1.Address();
        this.theForm = new forms_1.ControlGroup({
            userName: new forms_1.Control("A", forms_1.Validators.required),
            firstName: new forms_1.Control("B", forms_1.Validators.required),
            lastName: new forms_1.Control("C", forms_1.Validators.required),
            address: new forms_1.ControlGroup({
                address1: new forms_1.Control("D", forms_1.Validators.required),
                address2: new forms_1.Control("E"),
                city: new forms_1.Control("F", forms_1.Validators.required),
                state: new forms_1.Control("G", forms_1.Validators.required),
                postalCode: new forms_1.Control("12345", postalValidator_1.validPostalCode)
            }),
            emailAddress: new forms_1.Control("I", forms_1.Validators.required),
            phone: new forms_1.Control("123-456-7890", phoneValidator_1.validPhoneNumber)
        });
    }
    registrationForm.prototype.register = function () {
        console.log(this.theForm);
        console.log(this.customer);
    };
    registrationForm = __decorate([
        angular2_1.Component({
            selector: 'register'
        }),
        angular2_1.View({
            templateUrl: 'components/registrationForm/registrationForm.html',
            directives: [forms_1.formDirectives]
        })
    ], registrationForm);
    return registrationForm;
})();
exports.registrationForm = registrationForm;
//# sourceMappingURL=registrationForm.js.map