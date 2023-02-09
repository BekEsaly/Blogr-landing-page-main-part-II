const ddBtn=document.querySelectorAll('.dropdown-btn');
const ddMenu=document.querySelectorAll('.dropdown-menu');
const arrow=document.querySelectorAll('.dropdown-btn img');
ddBtn.forEach((btn, current)=>{
    btn.addEventListener('click', (actual, arrowUp)=>{
         actual=ddMenu[current];
        arrowUp=arrow[current];
            ddMenu.forEach((e)=>{
               e.classList.remove('active') 
            });
             arrow.forEach((e)=>{
               e.classList.remove('arrow-up') 
            });
           actual.classList.toggle('active');
            arrowUp.classList.toggle('arrow-up');
    })
}) 
document.addEventListener("click", (e) => {
		if (!e.target.closest('.header--menu-link')) {
	    ddMenu.forEach((e)=>{
               e.classList.remove('active') 
            });
             arrow.forEach((e)=>{
               e.classList.remove('arrow-up') 
            })
		}
})
const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.header--menu-link');
 
hamburger.addEventListener('click', ()=>{
 hamburger.classList.toggle('icon-close');
 menu.classList.toggle('hamburger-active')
  
})
