var Stuff = (function () {
    function Stuff($http) {
        this.$http = $http;
    }
    Stuff.prototype.methodThatUsesHttp = function () {
        var url = 'http://www.json-generator.com/api/json/get/cfgqzSXcVu?indent=2';
        this.$http.get(url).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    return Stuff;
})();
exports.Stuff = Stuff;
//# sourceMappingURL=xhr_request.js.map