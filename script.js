// Smooth navigation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});





// Digital rain generator


const rain = document.querySelector(".rain");


const characters =
"010101 OSINT CSINT DATA TRACE NETWORK ENTITY CONNECTION ANALYSIS";



function createDrop(){


    const drop =
    document.createElement("span");


    drop.innerText =
    characters[
        Math.floor(
            Math.random()*characters.length
        )
    ];



    drop.style.position="absolute";


    drop.style.left =
    Math.random()*100+"%";



    drop.style.top="-50px";



    drop.style.color =
    "rgba(180,80,255,0.6)";



    drop.style.fontSize =
    Math.random()*20+10+"px";



    drop.style.animation =
    "fall "+(Math.random()*5+3)+"s linear";



    rain.appendChild(drop);



    setTimeout(()=>{

        drop.remove();

    },8000);


}



setInterval(createDrop,100);






// Card reveal animation


const cards =
document.querySelectorAll(".card");



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


});




cards.forEach(card=>{


card.style.opacity="0";


card.style.transform=
"translateY(40px)";


card.style.transition=
"0.8s";


observer.observe(card);


});







// System message

console.log(
"ARFINOV INTELLIGENCE SYSTEM ONLINE"
);
