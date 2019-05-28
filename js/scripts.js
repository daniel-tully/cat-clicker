// declare variables
const catCtn = document.querySelector('.cat-ctn');
let cats= [];

// class - cat
class Cats {
    constructor(name, imgSrc, altAtt) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.altAtt = altAtt;
    }
}

// instantiate cat objects
const cat1 = new Cats ('Tom', 'img/tom-cat.jpg', 'Tom the cat');
const cat2 = new Cats ('Ally', 'img/ally.jpg', 'Ally the cat');

cats.push(cat1);
cats.push(cat2);

window.addEventListener('DOMContentLoaded', () => {

    // inject cats
    for(cat of cats) {
        const catBlock = document.createElement('DIV');

        catBlock.innerHTML += `<!-- cat -->
        <div class="cat-block">
            <div class="cat-inner">
                <div class="cat-icon">
                    <img src="${cat.imgSrc}" alt="${cat.altAtt}" width="200" height="auto">
                </div>
                <div class="counter">0</div>
            </div>
        </div>`;

        catBlock.addEventListener('click', () => {
            const counter = catBlock.querySelector('.counter');
            let count = parseInt(counter.innerText);

            count = count += 1;
            counter.innerText = count;
        });

        catCtn.appendChild(catBlock);
    }
});
