
let sum = localStorage.getItem('sum') || '';
document.querySelector('.js-cal-show')
    .innerHTML = `${sum}`;
// console.log(sum);
function updatecalculate(number) {

    sum = localStorage.getItem('sum') + number;
    // console.log(sum)
    localStorage.setItem('sum', sum);
    document.querySelector('.js-cal-show')
        .innerHTML = `${sum}`;
}

function calculate() {
    sum = eval(sum);
    // console.log(sum);
    localStorage.setItem('sum', sum);
    document.querySelector('.js-cal-show')
        .innerHTML = `${sum}`;
}