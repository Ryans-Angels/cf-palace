// 'use strict';

let modal = document.getElementById('modal');
let modalBtn = document.getElementById('modal-button');
let submitBtn = document.getElementById('submit-button');
let closeBtn = document.getElementsByClassName('close-button')[0];


// function to open modal
// function openModal() {
//   console.log(123);
//   // modal.style.display = 'block';
// }

// function to submit modal
function submitModal() {
  modal.style.display = 'none';
}

// function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// function for clicks outside of modal
function outsideClickModal(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Open the modal
// modalBtn.addEventListener('click', openModal);
// Submit the modal
submitBtn.addEventListener('click', submitModal);
// Close the modal manually
closeBtn.addEventListener('click', closeModal);
// Close the modal with click outside the modal
window.addEventListener('click', outsideClickModal);
