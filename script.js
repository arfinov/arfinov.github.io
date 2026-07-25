// Плавная навигация

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});





// Анимация появления карточек


const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:0.2

});



cards.forEach(card=>{


observer.observe(card);


});






// Цифровой дождь


const rain = document.querySelector(".rain");


const symbols = 
"0101010101 OSINT CSINT DATA NETWORK";


setInterval(()=>{


const drop=document.createElement("span");


drop.innerText =
symbols[
Math.floor(
Math.random()*symbols.length
)
];


drop.style.position="absolute";

drop.style.left =
Math.random()*100+"%";


drop.style.top="-20px";


drop.style.color=
"rgba(180,80,255,0.5)";


drop.style.fontSize=
Math.random()*20+10+"px";


drop.style.animation=
"fall 5s linear";


rain.appendChild(drop);



setTimeout(()=>{

drop.remove();

},5000);



},100);






// загрузка сайта

console.log(
"ARFINOV OSINT / CSINT SYSTEM ONLINE"
);
