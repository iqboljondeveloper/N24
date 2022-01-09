const showModal = document.querySelector(`.promotion-new-btn`)
const modal = document.getElementById(`modal`)
const closeModal = document.getElementById(`closeModal`)
const overlay = document.getElementById(`overlay`)


showModal.addEventListener(`click`, () => {
    modal.classList.remove(`hidden`)
    // showModal.classList.add(`hidden`)
    overlay.classList.remove(`hidden`)
})

closeModal.addEventListener(`click`, () =>{
    modal.classList.add(`hidden`)
    // showModal.classList.remove(`hidden`)
    overlay.classList.add(`hidden`)
})

overlay.addEventListener(`click`, () => {
    modal.classList.add(`hidden`)
    showModal.classList.remove(`hidden`)
    overlay.classList.add(`hidden`)
})

// document.addEventListener(`click`, (e) => {
//     if(e.target.classList[0] == undefined){
//         modal.classList.add(`hidden`)
//     showModal.classList.remove(`hidden`) 
//     overlay.classList.add(`hidden`)
//     }
// })
document.addEventListener('keydown', function(event) {
    if (event.code == 'Escape') {
        modal.classList.add(`hidden`)
        showModal.classList.remove(`hidden`)
        overlay.classList.add(`hidden`)
    }
});