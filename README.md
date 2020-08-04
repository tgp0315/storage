### storage

使用方式

import { LS, SS} from "storage"

设置ls
```
LS.setItem("admin", "张三");
```
获取ls
```
LS.getItem("admin");
```
删除某个ls
```
LS.removeItem("admin");
```
全部清除
```
LS.clear()
```

SS 用法同 LS