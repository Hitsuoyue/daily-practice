### call、apply、bind 的实现

#### 1. call
**call 的特点**
* 将函数的 this 指向传入 call 的第一个参数
* 接收第二个参数为函数的参数
* 立即执行函数

```javascript 
    let obj = {
      name: 'lucy',
      age: 12
    }

    function test(param) {
      console.log('this.name:', this.name);
      console.log('param:', param);
    }

    Function.prototype.cusCall = function(context) {
      if(context === undefined || context === null) {
        context = window;
      }
      context.fn = this;
      const args = Array.from(arguments).slice(1);
      const res = context.fn(args);
      delete context.fn;
      return res;
    }

    test.cusCall(obj, 1, 2, 3);
```

#### 2. apply
**apply 的特点**
* 将函数的 this 指向传入 apply 的第一个参数
* 接收除第一个参数之外的所有参数作为函数的参数
* 立即执行函数

```javascript 
    let obj = {
      name: 'lucy',
      age: 12
    }

    function test(param) {
      console.log('this.name:', this.name);
      console.log('param:', param);
    }

    Function.prototype.cusApply = function(context) {
      if(context === undefined || context === null) {
        context = window;
      }
      context.fn = this;
      const args = arguments[1];
      const res = context.fn(args);
      delete context.fn;
      return res;
    }

    test.cusApply(obj, 123, 2, 3);    
```

#### 3. bind
* 将函数的的 this 指向传入 bind 的第一个参数
* 返回一个函数
* 不立即执行

```javascript 
    let obj = {
      name: 'lucy',
      age: 12
    }

    function test(param) {
      console.log('this.name:', this.name);
      console.log('param:', param);
    }

    Function.prototype.cusBind = function(context) {
      if(context === undefined || context === null) {
        context = window;
      }
      let self = this;
      return function(arguments) {
        context.fn = self;
        let res = context.fn(arguments);
        delete context.fn;
        return res;
      }
    }
    let fnTest = test.cusBind(obj);
    fnTest('hahahha');


    function foo(str) {
      "use strict";
      eval(str);
      console.log(a);
    }
    foo("var a = 2")
```

