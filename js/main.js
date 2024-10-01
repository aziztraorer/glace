const pop=document.querySelector('.poper')
const annule=document.querySelector('.annule')
const menu = document.querySelector('.Menu')
const menuoption= document.querySelector('.menuoption')
const glace=document.querySelector('.glace')
const fleche = document.querySelector('#flechehaut')
menu.addEventListener('click',(e)=>{
    menuoption.classList.toggle('mn')
})
setTimeout(() => {
    pop.style.display='block'
}, 2000);

annule.addEventListener('click',()=>{
    pop.style.display='none'
})

window.addEventListener('scroll',(e)=>{
    console.log(window.scrollY)
    if(window.scrollY>120){
        fleche.style.display='block'
    }else{
        
        fleche.style.display='none'
    }
})
fleche.addEventListener('click',()=>{
    window.scrollTo({top: 0,
         left:0,behavior:'smooth' });
})

