"use strict";
// export default function to(promise: any): [Error, any] {
//     return promise
//     .then(data => [null, data])
//     .catch(err => [err]);
// }
exports.__esModule = true;
function to(promise) {
    return promise.then(function (data) {
        return [null, data];
    })["catch"](function (err) { return [err]; });
}
exports["default"] = to;
