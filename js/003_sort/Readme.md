### 排序算法
#### 1. 冒泡排序
**思路**
> * 整个队列分为两部分，后面是已排序的，前面是未排序的
> * 从未排序队列头开始向后，依次比较两个相邻数字，不满足排序则调换顺序，每次比较排出一个最大值。

**时间复杂度**
> * 最好情况，给定数组是排好序的，没有数据交换，提前退出，遍历一次即可，则时间复杂度为O(n)
> * 最坏情况，给定数组是倒序排列的，没有提前退出的情况，进行n次冒泡排序，时间复杂度为O(n^2)

```javascript
function bubble(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    console.log('arr', arr)
    return arr;
}

let arr = [4, 5, 6, 3, 2, 1];
bubble(arr)
```

#### 2. 插入排序

**思路**
> * 整个队列分为两部分，前面是已排序的，后面是未排序的
> * 将未排序队列的第一个数`a`与已排序队列的数从后向前进行比较，如果比已排序的数`b`小，则把`b`往后放一位，直到找到已排序的数`b`大于`a`，或当前这一轮比较完成，再把`a`放到指定位置上。
**时间复杂度**
> * 最好情况，给定数组是排好序的，没有数据交换，提前退出，遍历一次即可，则时间复杂度为O(n)
> * 最坏情况，给定数组是倒序排列的，没有提前退出的情况，进行n次冒泡排序，时间复杂度为O(n^2)

**注：为什么插入排序优于冒泡排序**
> 在顺序不对需要进行操作时，插入排序是移动(1*n)，最后插入一次(1)，而冒泡是每一次都要替换(3*n)

```javascript
function insert(arr) {
    for(let i=1;i<arr.length;i++) {
        let j = i-1;
        let value = arr[i];
        for(; j>=0; j--) {         
            console.log('value', value, 'arr[j]', arr[j]);
            if (arr[j] > value) {
                arr[j+1] = arr[j];
            } else {
                break;
            }            
        }
        console.log('j', j)
        arr[j+1] = value;
    }
    console.log('插入排序--arr',arr)
}
insert(arr);
```

#### 3. 选择排序
**思路**
> * 整个队列分为两部分，前面是已排序的，后面是未排序的
> * 每次从未排序队列里遍历，找到最小的值，放在已排序队列的队尾

**时间复杂度**
> * 
> * 

```javascript
function select(arr) {
    for(let i=0; i<arr.length; i++) {
        let min = i;
        for(let j=i; j<arr.length; j++){
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    console.log('选择排序--arr',arr)
}
```

#### 4. 归并排序
**思路**
> * 将一个数组从中间分两部分，两部分分别排序，再合成一个有序的数组，逐级分解为最小粒度

**时间复杂度**
> * O(nlogn) 
> 时间复杂度为 n*C ，C 为 mergeSort的次数，
> n => n/2 => n/4 => n/(2^C) n/(2^C) = 1    C = log2n

```javascript
function merge(left, right) {
    let i = 0, j = 0;
    const list = [];
    while(i <= left.length - 1 || j <= right.length - 1) {
        if(left[i] <= right[j]) {
            list.push(left[i]);
            i++;
        } else {
            list.push(right[j]);
            j++; 
        }
    }
    return list;
}
function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const len = arr.length;
    const middle = Math.floor(len/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}
console.log('归并排序', mergeSort(arr));
```


#### 5. 快速排序
**思路**
> * 选取一个分区点，把小于这个点的值放在左边，大于这个点的值放在右边，逐级分解为最小粒度

**时间复杂度**
> * 同归并排序

```javascript
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const p = arr.length - 1;
    const left = [];
    const right = [];
    for(let i=0; i < p; i++) {
        if(arr[i] <= arr[p]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(quickSort([arr[p], ...right]));
}
console.log('快速排序--', quickSort(arr));
```