const totalProduct = [];
const cartNum = document.getElementById('cart_num');
let buttonsCard = document.querySelectorAll('.stock__basket');
let buttonActive = document.querySelector('.stock__basket');


window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-card')) {
        const button = event.target.closest('.stock__basket');
        const card = event.target.closest('.stock__card');
    

    if(!button.hasAttribute('data-active')) {
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.stock__img').getAttribute('src'),
            price: card.querySelector('.stock__action').innerText,
            title: card.querySelector('.stock__phone').innerText,
            favorites: card.querySelector('.favorite').getAttribute('src'),
            // counterCard: counter
        }

        totalProduct.push(productInfo);
        cartNum.innerText = totalProduct.length;
        // console.log(productInfo);
        
        button.setAttribute('data-active', 'true');
        button.classList.add('active');
        }

    }
    if (event.target.dataset.action === 'min') {
        console.log('minus');
        const counterWrapper = event.target.closest('.button-group');
        console.log(counterWrapper);

        const counterPls = counterWrapper.querySelector('[data-counter]');
        console.log(counterPls)
        counterPls.innerText = --counterPls.innerText;
        if (counterPls.innerText <= 1) {
            counterPls.innerText = 1;
        }
    }


    if (event.target.dataset.action === 'pls') {
        console.log('Plus');
    const counterWrapper = event.target.closest('.button-group');
    console.log(counterWrapper);

        const counterPls = counterWrapper.querySelector('[data-counter]');
        console.log(counterPls)
        counterPls.innerText = ++counterPls.innerText;
    }
})

// let counter = 1
let buttonPlus = document.querySelectorAll('.Plus');
let buttonMinus = document.querySelectorAll('.Minus');
let quantity = document.querySelector('.quantity');


function createButtonGroup(button) {
    if (!button.hasAttribute('data-created')) {
        const ButtonGroup = `
    <div class="button-group">
        <button data-action="min" class="btn minus">-</button>
        <span data-counter class="quantity">1</span>
        <button data-action="pls" class="btn plus">+</button>
    </div>
    `;


        button.insertAdjacentHTML('afterend', ButtonGroup);

        button.setAttribute('data-created', 'true');
    }

}

    buttonsCard.forEach(button => {
        button.addEventListener('click', () => {

            createButtonGroup(button)
            button.classList.add('active')
        });
    });


    

    










