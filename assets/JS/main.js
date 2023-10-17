// const menuBtn = document.querySelector('.menuBtn')
// const menuList = document.querySelector('.menuList')

// menuBtn.addEventListener('click', ()=>{
//     menuList.classList.toggle('show')
// })

// const menuBtn2 = document.querySelector('.menuBtn2')
// const menuList2 = document.querySelector('.menuList2')

// menuBtn2.addEventListener('click', ()=>{
//     menuList2.classList.toggle('show')
// })

// const menuBtn3 = document.querySelector('.menuBtn3')
// const menuList3 = document.querySelector('.menuList3')

// menuBtn3.addEventListener('click', ()=>{
//     menuList3.classList.toggle('show')
// })


// // slider

// const track = document.querySelector('.track')
// const backButton = document.querySelector('.back')
// const nextButton = document.querySelector('.next')
// const countImg = document.querySelectorAll('.img').length;
// console.log(countImg);
// let pos = 0;
// let width = 250;
// nextButton.addEventListener('click', function(){
//     if(pos <= -(width *(countImg -3))) return
//     pos -= width
//     track.style.left = pos+'px'
// })
// backButton.addEventListener('click', function(){
//     if(pos >= 0) return
//     pos +=width
//     track.style.left = pos+'px'
// })

// // accordion
// const accordion = document.querySelectorAll('.accordion')

// accordion.forEach(element=>{
//     element.addEventListener('click',()=>{
//         img = element.querySelector('.fa-caret-down')
//         img.classList.toggle('img_active')
//         accordionBody = element.querySelector('.accordion_body')
//         accordionBody.classList.toggle('accordion_body_active')
//     })
// })

// // vkladka

// const tabButton = document.querySelectorAll('.tab_heder_button')
// const tabs = document.querySelectorAll('.tab_body')

// for(let x = 0; x < tabButton.length; x++){
//     tabButton[x].addEventListener('click',()=>{
//         for(let y = 0; y < tabs.length; y++){
//             if (x == y){
//                 tabs[y].classList.add('tab_body_active')
//                 tabButton[y].classList.add('tab_button_active')
               
//             }else{
//                 tabs[y].classList.remove('tab_body_active')
//                 tabButton[y].classList.remove('tab_button_active')
             
//             }
//         }

//     })
// }

// intersectionobserver

const phoneBlock = document.querySelector('.phone-block')
const block = document.querySelectorAll('.block')

window.addEventListener('scroll',() =>{
    const windowHeight = window.innerHeight
    const scrollPosition = window.scrollY
    const hightBlock = block[3].clientHeight
    const blockMiddle = block[3].offsetTop + hightBlock / 2
    if (scrollPosition + windowHeight >= blockMiddle){
        phoneBlock.style.display = 'block'
    }else{
        phoneBlock.style.display = 'none'
    }
})