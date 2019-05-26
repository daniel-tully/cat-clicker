const catCtn = document.querySelector('.cat-ctn');
let newCount = 0;

catCtn.addEventListener('click', ()=> {
    const counter = catCtn.querySelector('.counter');
    newCount += 1;

    counter.innerText = newCount;


});