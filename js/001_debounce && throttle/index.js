let debouceInputEle = document.getElementById("debouceInput");
let throttleInputEle = document.getElementById("throttleInput");

debouceInputEle.addEventListener("input", debounce(onChange, 1000))
throttleInputEle.addEventListener("input", throttle(onChange, 500))

function onChange(e) {
    console.log('e.target.value', e.target.value);
}

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

