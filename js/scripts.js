// MCV Version
(() => {

/* ======= Model ======= */

    // model for cat list
    const model = {
        openCat: null,
        data: () => {
            class Cat {
                constructor(name, imgSrc, altAtt, open) {
                    this.name = name;
                    this.imgSrc = imgSrc;
                    this.altAtt = altAtt;
                    this.clicks = 0;
                }
            }
            return cats = [
                cat1 = new Cat ("Tom", "img/tom-cat.jpg", "Tom the cat"),
                cat2 = new Cat ("Ally", "img/ally.jpg", "Ally the cat"),
                cat3 = new Cat ("Street", "img/tom-cat.jpg", "Street the cat"),
                cat4 = new Cat ("Ginger", "img/ginger.jpg", "Ginger the cat"),
                cat5 = new Cat ("Feral", "img/feral.jpg", "Feral the cat")
            ];
        }
    };

/* ======= Controller ======= */

    // controller
    const controller = {
        // get cat array data from model
        getList: () => {
            const cats = model.data();
            return cats;
        },
        //start
        init: () => {
            controller.getList();
            view.init();
            model.openCat = cats[0];
            openCatView.init();
        },
        // get open cat
        getCat: () => {
            return model.openCat;
        },
        //set cat
        setCat: (cat) => {
            model.openCat = cat;
        },
        // increment counter
        incrementCounter: () => {
            model.openCat.clicks += 1;
            openCatView.render();
        }
    };

/* ======= View ======= */

    // list view
    const view = {
        // initialise the view with list of cats
        init: () => {
            const cats = controller.getList();
            const listCtn = document.querySelector(".cat-list");
            const adminBtn = document.querySelector(".admin-btn");
            const inputForm = document.querySelector(".input-form");
            
            // create the list of cats
            for(cat of cats) {
                const catBtn = document.createElement("BUTTON");
                catBtn.className = "text-center btn btn-dark mb-1";
                catBtn.innerText = `${cat.name}`;
                // uses IIFE for closure with the current cat in the loop passed in at the end
                catBtn.addEventListener("click", ((cat) => {
                    return function() {
                        controller.setCat(cat);
                        openCatView.render();
                    };
                })(cat));

                // add all the cat items to the list container
                listCtn.appendChild(catBtn);
            };

            // open the form when admin button is clicked
            adminBtn.addEventListener("click", () => {
                let openCat = controller.getCat();

                // show the input form
                inputForm.classList.remove("d-none");
                
                // add input values for open cat
                inputForm.querySelector("#input-cat-name").value = openCat.name;
                inputForm.querySelector("#input-cat-src").value = openCat.imgSrc;
                inputForm.querySelector("#input-cat-clicks").value = openCat.clicks;
                
                // cancel the form
                inputForm.querySelector(".cancel-btn").addEventListener("click", (e) => {
                    e.preventDefault();
                    inputForm.classList.add("d-none");
                });
                
                // save the form
                inputForm.querySelector(".save-btn").addEventListener("click", (e) => {
                    e.preventDefault();
                    openCat.name = inputForm.querySelector("#input-cat-name").value;
                    openCat.imgSrc = inputForm.querySelector("#input-cat-src").value;
                    openCat.clicks = inputForm.querySelector("#input-cat-clicks").value;
                    inputForm.classList.add("d-none");
                    openCatView.render();
                });
            });
        },
    };

    // open cat view
    const openCatView = {
        init: () => {
            openCat = controller.getCat();
            catCtn = document.querySelector(".cat-ctn");
            catName = catCtn.querySelector(".cat-name");
            catCounter = catCtn.querySelector(".counter");
            catImg = catCtn.querySelector(".cat-img");
            
            catName.innerText = openCat.name;
            catCounter.innerText = openCat.clicks;
            catImg.setAttribute("src", openCat.imgSrc);
            catImg.setAttribute("alt", openCat.altAtt);

            catCtn.addEventListener("click", () => {
                controller.incrementCounter();
            });
        },
        render: () => {
            openCat = controller.getCat();
            this.catName.innerText = openCat.name;
            this.catCounter.innerText = openCat.clicks;
            this.catImg.setAttribute("src", openCat.imgSrc);
            this.catImg.setAttribute("alt", openCat.altAtt);
        }
    }
    // start the app
    controller.init();
})();