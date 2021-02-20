### 1. 块级元素居中
#### 1.1 flex 居中 
**不需知道内容宽高**

```javascript
    <div class="container conainer_flex">
        <div class="content_1">
            content
        </div>
    </div>
         .container {
            width: 300px;
            height: 300px;
            background-color: bisque;
            border: 1px solid #999;
        }
        .content_1 {
            background-color: aquamarine;
            width: 120px;
            height: 120px;
        }
        .conainer_flex {
            display: flex;
            justify-content: center; //水平居中
            align-items: center;  //垂直居中
        } 
```


#### 1.2 relative 居中 

```javascript
    <div class="container conainer_relative">
        <div class="content_1 conainer_relative_content">
            content
        </div>
    </div>
         .container {
            width: 300px;
            height: 300px;
            background-color: bisque;
            border: 1px solid #999;
        }
        .content_1 {
            background-color: aquamarine;
            width: 120px;
            height: 120px;
        }
        .conainer_relative {
            overflow: hidden;
        }
        .conainer_relative_content {
            position: relative;
            margin: 50%;
            left: -60px;
            top: -60px;
        }
```

#### 1.3 absolute 居中 

```javascript
    <h4>已知子元素宽高</h4>
    <div class="container conainer_absolute">
        <div class="content_1 conainer_absolute_content_1">
            content
        </div>
    </div>
    <h4>未知子元素宽高</h4>
    <div class="container conainer_absolute">
        <div class="content_1 conainer_absolute_content_2">
            content
        </div>
    </div>
    <h4>未知子元素宽高 - transform</h4>
    <div class="container conainer_absolute">
        <div class="content_1 conainer_absolute_content_3">
            content
        </div>
    </div>
         .container {
            width: 300px;
            height: 300px;
            background-color: bisque;
            border: 1px solid #999;
        }
        .content_1 {
            background-color: aquamarine;
            width: 120px;
            height: 120px;
        }
        .conainer_absolute {
            position: relative;
        }
        .conainer_absolute_content_1 {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -60px;
            margin-top: -60px; 
        }
        .conainer_absolute_content_2 {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }
        .conainer_absolute_content_3 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); //位移自己宽高的 50%
        }
```

### 2. 块级元素内容居中
#### 2.1 flex 居中 -- 同块级元素flex居中
```javascript
    <div class="container_inline parent_flex">
        <span class="child">content_haha_flex_haha</span>
    </div>
        .container_inline {
            width: 80px;
            height: 80px;
            background-color: bisque;
        }
        .parent_flex {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .child {
            word-break: break-all;
        }
```

#### 2.2 table 居中
```javascript
    <div class="container_inline parent_table">
        <span class="child child_table">content_haha_table_haha</span>
    </div>
        .container_inline {
            width: 80px;
            height: 80px;
            background-color: bisque;
        }
        .parent_table {
            display: table;
            text-align: center;
        }
        .child {
            word-break: break-all;
        }
```