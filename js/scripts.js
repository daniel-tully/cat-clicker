// declare variables
const catCtn = document.querySelector('.cat-ctn');

// class - cat
class Cat {
    constructor(name, imgSrc, altAtt) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.altAtt = altAtt;
        this.clicks = 0;
    }
}

// instantiate cat objects
const cats = [
    cat1 = new Cat ('Tom', 'img/tom-cat.jpg', 'Tom the cat'),
    cat2 = new Cat ('Ally', 'img/ally.jpg', 'Ally the cat'),
    cat3 = new Cat ('Street', 'img/tom-cat.jpg', 'Street the cat'),
    cat4 = new Cat ('Ginger', 'img/ally.jpg', 'Ginger the cat'),
    cat5 = new Cat ('Feral', 'img/tom-cat.jpg', 'Feral the cat')
];

window.addEventListener('DOMContentLoaded', () => {
    const listCtn = document.querySelector('.cat-list');

    // inject Cat
    for(cat of cats) {
        const catLi = document.createElement('LI');

        catLi.className = "bg-light p-2 mb-1 border border-dark rounded";

        catLi.innerText = `${cat.name}`;

        // uses IIFE for closure with the current cat in the loop passed in at the end
        catLi.addEventListener('click', ((thisCat) => {
            return function() {
                catCtn.innerHTML = `<!-- cat -->
                <div class="cat-block container-fluid">
                    <div class="cat-inner">
                        <div class="cat-icon">
                        <div class="row justify-content-between">
                            <div class="cat-name">${thisCat.name}</div>
                            <div class="counter">${thisCat.clicks}</div>
                        </div>
                        <img src="${thisCat.imgSrc}" alt="${thisCat.altAtt}" width="100%" height="auto">
                        </div>
                    </div>
                </div>`;

                console.log(thisCat.clicks);
                // click listener for cat counter
                catCtn.addEventListener('click', () => {
                    const counter = catCtn.querySelector('.counter');

                    console.log(thisCat.clicks);

                    thisCat.clicks = thisCat.clicks += 1;
                    counter.innerText = thisCat.clicks;
                });

                
            }
        })(cat));

        listCtn.appendChild(catLi);
    }
});