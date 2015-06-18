/// <reference path="../typings/tsd.d.ts" />
function validPostalCode(c) {
    if (c.value) {
        if (!c.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)) {
            return { invalidPostalCode: true };
        }
    }
    return null;
}
exports.validPostalCode = validPostalCode;
//# sourceMappingURL=postalValidator.js.map