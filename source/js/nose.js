
document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
       delay: 5000,
       disableOnInteraction: true,
     },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});



//accion que hace que aparezca la informacion si el usuario lo ve, 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
  });
});

// si arrastra para arriba o para abajo, la informacion se ocultara
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//seccion que cambia el tab si aprieto los botones del slider
document.querySelectorAll('.button').forEach(boton => {
  boton.addEventListener('click', () => {
    const tabId = boton.getAttribute('data-tab');

    
    tabs.forEach(tab => tab.classList.remove('active'));
    const tabActivo = document.getElementById(tabId);
    if (tabActivo) tabActivo.classList.add('active');

    
    const line = document.querySelector('.line');
    if (tabActivo && line) {
      line.style.width = tabActivo.offsetWidth + "px";
      line.style.left = tabActivo.offsetLeft + "px";
    }

    
    all_content.forEach(content => content.classList.remove('active'));

    
    const tabIndex = Array.from(tabs).findIndex(tab => tab.id === tabId);
    if (tabIndex !== -1) {
      all_content[tabIndex]?.classList.add('active');
    }

    
    document.getElementById(tabId)?.scrollIntoView({ behavior: 'smooth' });
  });
});




  
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        
        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        
        link.classList.add('active');
        const targetId = link.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
      });
    });
  });

const tabs= document.querySelectorAll('.tabbutton');
const all_content= document.querySelectorAll('.content');

tabs.forEach((tab, index)=>{
  tab.addEventListener('click', (e)=>{
      tabs.forEach(tab=> {tab.classList.remove('active')});
      tab.classList.add('active');
      
      var line=document.querySelector('.line');
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach(content=>{content.classList.remove('active')})
    all_content[index].classList.add('active');
  })
})
