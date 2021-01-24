### 防抖节流的简单实现：

防抖：
一定时间内，回调函数只执行一次，期间若有事件触发，则重新计时。

```javascript
function debounce (fn, wait) {
    let timeout;
    return function(arguments) {
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn(arguments);
        }, wait);     
    }
}
```
节流：
一定时间内，回调函数只执行一次，期间有事件触发，不作处理。
```javascript
function throttle(fn, wait) {
    let timeout;
    return function(arguments) {
        if(timeout) {
            return 
        }
        timeout = setTimeout(() => {
            fn(arguments);
            timeout = null;
        }, wait);
    }
}
```

二者都用于连续触发的事件，节省开销；
如果遇到的是连续不停的事件，应该选择节流，因为不停触发的事件会让防抖只会执行一次回调函数。
