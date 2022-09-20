let first = document.querySelector ("#first")
let second = document.querySelector ("#second")
let third = document.querySelector ("#third")
let btn = document.querySelector ("#btn")

btn.addEventListener('click',() => {
    setTimeout(() => {
        first.style.color = 'green'
        setTimeout(() => {
            second.style.color = 'yellow'
        }, 2000);
        setTimeout(() => {
            third.style.color = 'blue'
        }, 3000);
    }, 1000);
})