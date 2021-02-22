# JS 的运行机制
> **小回顾：** 上一篇进程与线程中介绍到前端操作主要是在 **渲染进程** 中进行，而渲染进程中包含一些常用的且与JS运行相关的线程：JS 引擎线程、事件触发线程、定时器线程。

### 1. JS 是单线程的

> * JS 分为 **同步任务和异步任务**；
> * 同步任务在主线程上执行，形成一个 **执行栈**;
> * 事件触发线程维护一个 **事件队列**，当异步任务有了运行结果，就会被添加到事件队列尾部，等待 JS 引擎空闲时来执行；
> * 当 **执行栈** 中的任务都执行完成，系统就会读取事件队列，将可执行的任务添加到 **执行栈** 中，进行执行。

上述过程就是所说的 **事件循环**。

### 2. 宏任务、微任务
> * **宏任务：** 任务队列中的任务（相当于同步任务和部分异步任务：定时器），在执行栈上按顺序依次执行，每个任务会完整执行，过程中不可被打断；
> * **微任务：** 异步任务的一种，如 promise、MutationObserver，存在于微任务队列中，穿插于执行栈中的任务间执行（可插队执行，因此快于 setTimeout 的响应），JS 会循环检查为任务队列中是否有微任务，一但执行栈中的一个任务执行完成，且有微任务在等待，则会把微任务队列中的微任务全部执行。

**注：** 对宏任务微任务执行顺序的处理各浏览器可能会有些差异，但总结本文时在 chrome、safari、firefox 上尝试均已统一。

### 3. 示例
#### 3.1 示例一
```javascript
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');
```
执行结果：
```javascript
script start
script end
promise1
promise2
setTimeout
```

#### 3.2 示例二
html
```html
<div class="outer">
  <div class="inner"></div>
</div>
```
javascript
```javascript
// Let's get hold of those elements
var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

// Let's listen for attribute changes on the
// outer element
new MutationObserver(function () {
  console.log('mutate');
}).observe(outer, {
  attributes: true,
});

// Here's a click listener…
function onClick() {
  console.log('click');

  setTimeout(function () {
    console.log('timeout');
  }, 0);

  Promise.resolve().then(function () {
    console.log('promise');
  });

  outer.setAttribute('data-random', Math.random());
}

// …which we'll attach to both elements
inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);
```
执行结果：
```javascript
click
promise
mutate
click
promise
mutate
timeout
timeout
```

参考：
* http://www.dailichun.com/2018/01/21/js_singlethread_eventloop.html
* https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/




