### 1. position: absolute 相对于谁定位
> * 相对于最近的 position 是 relative、fixed、absolute、sticky 的祖先元素定位，否则相对于根元素定位

```javascript
    <div id="father">
        <div id="absolute">
            我的定位是 :
            position: absolute;
            top: 12px;
        </div>
    </div>
        #father {
            position: relative;
            width: 200px;
            height: 200px;
            background-color: antiquewhite;
        }
        #absolute{
            position: absolute;
            left: 12px;
            top: 12px;
        }
```

### 2. position: sticky 特点
> * 在屏幕中可见时，相当于 position: relative；当滚动到超出屏幕区域时，相当于 position: fixed；
> * 不脱离文档流，相对于离他最近的有滚动条的祖先元素定位

```javascript
    <div id="sticky-father">
        hahahha <br>
        hahahhahahah <br>
        <div id="sticky">
            我的定位是 :
            position: sticky;
            top: 12px;
        </div>
        hahahha <br>
        hahahhahahah <br>
        hahah <br>
        hahah <br>
        hahah <br>
        hahah <br>
    </div>
        #sticky-father{
            height: 80px;
            background-color: #ccc;
            overflow: auto;
        }
        #sticky {
            position: sticky;
            left: 12px;
            top: 12px;
            background-color: aquamarine;
        }
```