const arr = [4, 5, 6, 3, 2, 1];

//冒泡排序
//从未排序队列头开始向后，依次比较两个相邻数字，不满足排序则调换顺序，每次比较排出一个最大值。
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
    console.log('冒泡排序--arr', arr)
    return arr;
}

bubble(arr);

//插入排序
//将未排序队列的第一个数与已排序队列的数从后向前进行比较，如果比已排序的数小，则交换位置
function insert(arr) {
    for(let i=1;i<arr.length;i++) {
        for(let j=i-1; j>=0; j--) {
            if (arr[j] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log('插入排序--arr',arr)
}
insert(arr);

//选择排序
//找出未排序队列里最小的值，放在已排序队列的末尾。
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

//归并排序
//将一个数组从中间分两部分，两部分分别排序，再合成一个有序的数组，逐级分解为最小力度。
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
console.log(mergeSort(arr));
