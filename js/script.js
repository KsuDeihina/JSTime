/* Получаем элементы с  HTML */

/* Получаем секундную стрелку */
const sec = document.querySelector('.s'),
    min = document.querySelector('.m'), /* Получаем минутную стрелку */
    hour = document.querySelector('.h') /* Получаем часовую стрелку */

const numberHours = document.querySelector('.hours'),
numberMinutes = document.querySelector('.minutes')
// new Date() - получает текущую дату с устройства
// let date = new Date()

// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());


function clock() {
    
    let time = new Date()
    let seconds = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30
    
    sec.style = `transform: rotate(${seconds}deg);`
    min.style = `transform: rotate(${minutes}deg);`
    hour.style = `transform: rotate(${hours}deg);`
    // innerHTML - заменяет внутренний контент HTML элемента
    let a = time.getHours()
    let b = time.getMinutes()

    if(a >=0 && a <= 9){
        numberHours.innerHTML = '0' + a;
    } else{numberHours.innerHTML = a}
    if(b >=0 && b <= 9){
        numberMinutes.innerHTML = '0' + b;
    } else{numberMinutes.innerHTML = b;}
    
    
    // рекурсия это когда функция внутри себя вызывает саму себя
    setTimeout(() => clock(), 1000);
    
    
}

clock()




// setTimeout(() => {
//     console.log('asddfdf');
// }, 2000);

// setInterval(() => {
//     console.log('interval');
// }, 3000);