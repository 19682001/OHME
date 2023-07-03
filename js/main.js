'use strict';

{
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
          currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  const images = document.querySelectorAll('.heros img');
  let currentIndex = 0;

  play();

    const btn = document.getElementById('btn');
    const menu = document.getElementById('menu');
    const span = document.getElementById('span');
    let count = 0;

    btn.addEventListener('click', () => {
      if (count === 0) {
      menu.classList.add('hidden');
      span.classList.add('span');
      count++;
    } else if (count > 0) {
      menu.classList.remove('hidden');
      span.classList.remove('span');
      count = 0;
    }
  });

  const modalBtns = document.querySelectorAll(".modal-toggle");

  modalBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.getAttribute('data-modal');
      const modalShow = document.getElementById(modal);
      modalShow.classList.add('hidden');
      
      // document.getElementById(modal).style.display = "block";
    };
  });

  const closeBtns = document.querySelectorAll(".modal-close");

  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.closest('.modal');
      modal.classList.remove('hidden');
      // modal.style.display = "none";
    };
  });
  
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };


  const fModal = document.querySelector('.f-modal');
  const fModalBtn = document.getElementById('f-btn');
  let fCount = 0;

  fModalBtn.addEventListener('click', () => {
    if (fCount === 0) {
    fModal.classList.add('hidden');
    fCount++;
    } 
  });

  const fClose = document.querySelector('.f-modal-close');

  fClose.addEventListener('click', () => {
    if (fCount > 0) {
      fModal.classList.remove('hidden');
      fCount = 0;
    }
  })
}