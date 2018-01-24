"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiUtils;
(function (UiUtils) {
    function isObjectEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    UiUtils.isObjectEmpty = isObjectEmpty;
    function isArrayEmpty(ary) {
        if (ary.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    UiUtils.isArrayEmpty = isArrayEmpty;
})(UiUtils = exports.UiUtils || (exports.UiUtils = {}));
