// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 19, 20, 43, 120, 200, 320, 430, 536, 777, 980, 1000];
const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

//二分查找
//在一个有序数组中找到指定值
function bsearch(arr, num) {
    const len = arr.length;
    let start = 0, end = len - 1, mid = Math.floor((end - start)/2);
    let index;
    console.log('mid-1', mid, start, end, (end - start)/2);
    while(end - start >= 0) {
        if(num < arr[mid]) {
            end = mid - 1;
            mid = start + Math.floor((end - start)/2);
        } else if(num > arr[mid]) {
            start = mid + 1;
            mid = start + Math.floor((end - start)/2);
        } else if(num === arr[mid]) {
            index = mid;
            break;
        }
        console.log('mid-2', mid, end - start);
        // console.log('num-2', arr[mid], end - start);
    }
    console.log('index', index);
    return index;
}

bsearch(arr, 5)
