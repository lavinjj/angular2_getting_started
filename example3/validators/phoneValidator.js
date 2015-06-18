/// <reference path="../typings/tsd.d.ts" />
function validPhoneNumber(c) {
    if (c.value) {
        if (!c.value.match(/\d\d\d-\d\d\d-\d\d\d\d/)) {
            return { invalidPhone: true };
        }
    }
    return null;
}
exports.validPhoneNumber = validPhoneNumber;
//# sourceMappingURL=phoneValidator.js.map