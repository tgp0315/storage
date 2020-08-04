"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SS = exports.LS = void 0;
var Storage = /** @class */ (function () {
    function Storage(store) {
        if (!store)
            return;
        this._store = store;
    }
    /**
     * @function 设置值
     * @param {string} _k 必须参数，属性
     * @param {any} _v 非必须参数，属性值
     */
    Storage.prototype.setItem = function (_k, _v) {
        if (!this._store)
            return;
        var kType = this.getType(_k);
        if (kType === "string") {
            this._store.setItem(_k, this.filterValue(_v));
        }
        else {
            console.log("key只能为字符串！");
        }
    };
    /**
     * @function 获取值
     * @param {string} _k 必须参数，属性
     */
    Storage.prototype.getItem = function (_k) {
        if (!this._store)
            return;
        var res;
        var kType = this.getType(_k);
        if (kType === "string") {
            res = this._store.getItem(_k);
        }
        else {
            console.log("key只能为字符串！");
        }
        return res;
    };
    /**
     * @function 移除值
     * @param {string} _k 必须参数，属性
     */
    Storage.prototype.removeItem = function (_k) {
        if (!this._store)
            return;
        var res;
        var kType = this.getType(_k);
        if (kType === "string") {
            res = this._store.removeItem(_k);
        }
        else {
            console.log("key只能为字符串！");
        }
    };
    /**
     * @function 移除所有
     */
    Storage.prototype.clear = function () {
        if (!this._store)
            return;
        this._store.clear();
    };
    /**
     * @function 判断类型
     * @param {any} para 必须参数，判断的值
     */
    Storage.prototype.getType = function (para) {
        var type = typeof para;
        if (type === "number" && isNaN(para))
            return "NaN";
        if (type !== "object")
            return type;
        return Object.prototype.toString
            .call(para)
            .replace(/[\[\]]/g, "")
            .split(" ")[1]
            .toLowerCase();
    };
    /**
     * @function 过滤值
     * @param {any} val 必须参数，过滤的值
     */
    Storage.prototype.filterValue = function (val) {
        var vType = this.getType(val);
        var nullVal = ["null", "undefined", "NaN"];
        var stringVal = ["boolen", "number", "string"];
        if (nullVal.indexOf(vType) >= 0)
            return "";
        if (stringVal.indexOf(vType) >= 0)
            return val;
        return JSON.stringify(val);
    };
    return Storage;
}());
var LocalStorage = /** @class */ (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage(store) {
        var _this = _super.call(this, store) || this;
        _this.WX_USER_ID = "WX_USER_ID";
        return _this;
    }
    return LocalStorage;
}(Storage));
var SessionStorage = /** @class */ (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage(store) {
        var _this = _super.call(this, store) || this;
        _this.WX_SSO_TITLE = "WX_SSO_TITLE";
        return _this;
    }
    return SessionStorage;
}(Storage));
var LS = new LocalStorage(window.localStorage || localStorage);
exports.LS = LS;
var SS = new SessionStorage(window.sessionStorage || sessionStorage);
exports.SS = SS;
