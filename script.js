// Open modal when clicking on a product card
document.querySelectorAll('.card--product').forEach(product => {
    product.addEventListener('click', () => {
        const modal = product.nextElementSibling;
        if (modal && modal.classList.contains('modal')) {
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            modal.style.pointerEvents = 'auto';
            modal.querySelector('.modal--card').style.transform = 'rotateX(0)';
        }
    });
});

// Close modal when clicking on the close button
document.querySelectorAll('.modal--close').forEach(close => {
    close.addEventListener('click', () => {
        const modal = close.closest('.modal');
        if (modal) {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modal.style.pointerEvents = 'none';
            modal.querySelector('.modal--card').style.transform = 'rotateX(90deg)';
        }
    });
});

// Close modal when clicking outside of the modal card
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // Clicked on the modal background
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
            modal.style.pointerEvents = 'none';
            modal.querySelector('.modal--card').style.transform = 'rotateX(90deg)';
        }
    });
});

// Prevent closing the modal when clicking inside the modal card
document.querySelectorAll('.modal--card').forEach(card => {
    card.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from bubbling up to the modal background
    });
});

// Show alert when clicking on the Add to Cart button inside the modal
document.querySelectorAll('.modal--button').forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal--button')) {
            console.log('Add to Cart button clicked'); // Debugging line
            alert('Your order is submitted');
        }
    });
});





// // Open modal when clicking on a product card
// document.querySelectorAll('.card--product').forEach(product => {
//     product.addEventListener('click', () => {
//         const modal = product.nextElementSibling;
//         if (modal && modal.classList.contains('modal')) {
//             modal.style.opacity = '1';
//             modal.style.visibility = 'visible';
//             modal.style.pointerEvents = 'auto';
//             modal.querySelector('.modal--card').style.transform = 'rotateX(0)';
//         }
//     });
// });

// // Close modal when clicking on the close button
// document.querySelectorAll('.modal--close').forEach(close => {
//     close.addEventListener('click', () => {
//         const modal = close.closest('.modal');
//         if (modal) {
//             modal.style.opacity = '0';
//             modal.style.visibility = 'hidden';
//             modal.style.pointerEvents = 'none';
//             modal.querySelector('.modal--card').style.transform = 'rotateX(90deg)';
//         }
//     });
// });

// // Close modal when clicking outside of the modal card
// document.querySelectorAll('.modal').forEach(modal => {
//     modal.addEventListener('click', (event) => {
//         if (event.target === modal) { // Clicked on the modal background
//             modal.style.opacity = '0';
//             modal.style.visibility = 'hidden';
//             modal.style.pointerEvents = 'none';
//             modal.querySelector('.modal--card').style.transform = 'rotateX(90deg)';
//         }
//     });
// });

// // Prevent closing the modal when clicking inside the modal card
// document.querySelectorAll('.modal--card').forEach(card => {
//     card.addEventListener('click', (event) => {
//         event.stopPropagation(); // Prevent click event from bubbling up to the modal background
//     });
// });

// // Show alert when clicking on the Buy Now button inside the modal
// document.querySelectorAll('.modal--button.modal--button-ghost').forEach(button => {
//     button.addEventListener('click', () => {
//         console.log('Buy Now button clicked'); // Debugging line
//         alert('Your order is submitted');
//     });
// });




















