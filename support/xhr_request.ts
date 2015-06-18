import {XHR} from 'angular2/src/core/compiler/xhr/xhr';

export class Stuff {
    $http;
    constructor($http: XHR) {
        this.$http = $http;
    }

    methodThatUsesHttp() {
        var url = 'http://www.json-generator.com/api/json/get/cfgqzSXcVu?indent=2';

        this.$http.get(url).then(function(res) {
            console.log(res);
        }, function(err) {
            console.log(err);
        });
    }
}