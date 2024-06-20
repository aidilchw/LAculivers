let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('hidden');
    } else {
        // Scroll up
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];

    // Function to update cart UI
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.name} - Rp.${item.price}
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total;
    }

    // Function to add item to cart
    function addToCart(name, price) {
        cart.push({ name, price });
        updateCartUI();
    }

    // Function to remove item from cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    // Event listener for adding items to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'), 10);
            addToCart(name, price);
        });
    });

    // Event listener for removing items from cart
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const index = event.target.getAttribute('data-index');
            removeFromCart(index);
        }
    });
});
