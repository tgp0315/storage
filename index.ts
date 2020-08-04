class Storage {
  public _store: any;
  constructor(store: any) {
    if (!store) return;
    this._store = store;
  }
  /**
   * @function 设置值
   * @param {string} _k 必须参数，属性
   * @param {any} _v 非必须参数，属性值
   */
  public setItem(_k: string, _v: any) {
    if (!this._store) return;
    let kType = this.getType(_k);
    if (kType === "string") {
      this._store.setItem(_k, this.filterValue(_v));
    } else {
      console.log("key只能为字符串！");
    }
  }
  /**
   * @function 获取值
   * @param {string} _k 必须参数，属性
   */
  public getItem(_k: string) {
    if (!this._store) return;
    let res;
    let kType = this.getType(_k);
    if (kType === "string") {
      res = this._store.getItem(_k);
    } else {
      console.log("key只能为字符串！");
    }
    return res;
  }

  /**
   * @function 移除值
   * @param {string} _k 必须参数，属性
   */
  public removeItem(_k: string) {
    if (!this._store) return;
    let res: any;
    let kType = this.getType(_k);
    if (kType === "string") {
      res = this._store.removeItem(_k);
    } else {
      console.log("key只能为字符串！");
    }
  }

  /**
   * @function 移除所有
   */
  public clear() {
    if (!this._store) return;
    this._store.clear();
  }

  /**
   * @function 判断类型
   * @param {any} para 必须参数，判断的值
   */
  public getType(para: any) {
    let type = typeof para;
    if (type === "number" && isNaN(para)) return "NaN";
    if (type !== "object") return type;
    return Object.prototype.toString
      .call(para)
      .replace(/[\[\]]/g, "")
      .split(" ")[1]
      .toLowerCase();
  }
  /**
   * @function 过滤值
   * @param {any} val 必须参数，过滤的值
   */
  public filterValue(val: any) {
    let vType = this.getType(val);
    let nullVal = ["null", "undefined", "NaN"];
    let stringVal = ["boolen", "number", "string"];
    if (nullVal.indexOf(vType) >= 0) return "";
    if (stringVal.indexOf(vType) >= 0) return val;
    return JSON.stringify(val);
  }
}

class LocalStorage extends Storage {
  constructor(store: any) {
    super(store);
  }
  WX_USER_ID = "WX_USER_ID";
}

class SessionStorage extends Storage {
  constructor(store: any) {
    super(store);
  }
  WX_SSO_TITLE = "WX_SSO_TITLE";
}

const LS = new LocalStorage(window.localStorage || localStorage);
const SS = new SessionStorage(window.sessionStorage || sessionStorage);

export  { LS, SS };
