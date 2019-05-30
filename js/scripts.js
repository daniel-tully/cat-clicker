// // declare variables
// const catCtn = document.querySelector('.cat-ctn');

// window.addEventListener('DOMContentLoaded', () => {
//     const listCtn = document.querySelector('.cat-list');

//     // inject Cat
//     for(cat of cats) {
//         const catLi = document.createElement('LI');

//         catLi.className = "li-cat bg-white p-2 rounded";

//         catLi.innerText = `${cat.name}`;

//         // uses IIFE for closure with the current cat in the loop passed in at the end
//         catLi.addEventListener('click', ((thisCat) => {
//             return function() {
//                 catCtn.innerHTML = `<!-- cat -->
//                 <div class="cat-block container-fluid p-0">
//                     <div class="cat-inner">
//                         <div class="cat-icon">
//                         <div class="container-fluid">
//                             <div class="row justify-content-between">
//                                 <div class="cat-name">${thisCat.name}</div>
//                                 <div class="counter">${thisCat.clicks}</div>
//                             </div>
//                         </div>
//                         <img src="${thisCat.imgSrc}" alt="${thisCat.altAtt}" width="100%" height="auto">
//                         </div>
//                     </div>
//                 </div>`;

//             }
//         })(cat));

//         listCtn.appendChild(catLi);
//     }
// });


// MCV Version
(() => {

    // model for cat list
    const modelList = {
        // the cats data
        data: () => {
            class Cat {
                constructor(name, imgSrc, altAtt) {
                    this.name = name;
                    this.imgSrc = imgSrc;
                    this.altAtt = altAtt;
                    this.clicks = 0;
                }
            }
            return cats = [
                cat1 = new Cat ('Tom', 'img/tom-cat.jpg', 'Tom the cat'),
                cat2 = new Cat ('Ally', 'img/ally.jpg', 'Ally the cat'),
                cat3 = new Cat ('Street', 'img/tom-cat.jpg', 'Street the cat'),
                cat4 = new Cat ('Ginger', 'img/ally.jpg', 'Ginger the cat'),
                cat5 = new Cat ('Feral', 'img/tom-cat.jpg', 'Feral the cat')
            ];
        }
    };

    // model for cat viewing area
    const modelArea = {};

    // controller
    const controller = {
        // get cat array data from model
        getList: () => {
            const cats = modelList.data();
            return cats;
        },
        //start
        init: () => {
            view.init();
        }
    };

    // view
    const view = {
        // initialise the view with list of cats
        init: () => {
            const cats = controller.getList();
            const catCtn = document.querySelector('.cat-ctn');
            const listCtn = document.querySelector('.cat-list');
            for(cat of cats) {
                const catLi = document.createElement('LI');
                catLi.innerHTML = `<li class="li-cat bg-white p-2 rounded">${cat.name}</li>`;
                // uses IIFE for closure with the current cat in the loop passed in at the end
                catLi.addEventListener('click', ((thisCat) => {
                    return function() {
                        catCtn.innerHTML = `<!-- cat -->
                        <div class="cat-block container-fluid p-0">
                            <div class="cat-inner">
                                <div class="cat-icon">
                                <div class="container-fluid">
                                    <div class="row justify-content-between">
                                        <div class="cat-name">${thisCat.name}</div>
                                        <div class="counter">${thisCat.clicks}</div>
                                    </div>
                                </div>
                                <img src="${thisCat.imgSrc}" alt="${thisCat.altAtt}" width="100%" height="auto">
                                </div>
                            </div>
                        </div>`;
                    }
                })(cat));
                listCtn.appendChild(catLi);
            }
            // add counter to open cat container
            catCtn.addEventListener('click', () => {
                let openCatTitle = catCtn.querySelector('.cat-name').innerText;

                for(cat of cats) {
                    if (openCatTitle === cat.name) {
                        const counter = catCtn.querySelector('.counter');
                        cat.clicks = cat.clicks += 1;
                        counter.innerText = cat.clicks;
                    }
                }
            });
        },
        // render view 
        showCat: () => {
        }
    };
    controller.init();
})();