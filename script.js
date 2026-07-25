// Smooth scrolling

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});




// Demo reviews generator

const reviews = [

"Excellent intelligence report and detailed analysis.",
"Professional OSINT research with clear methodology.",
"Fast investigation and structured information.",
"High quality digital footprint analysis.",
"Very detailed connection mapping.",
"Clear timeline reconstruction and evidence review.",
"Strong analytical approach.",
"Good communication and organized reporting.",
"Accurate open source research.",
"Professional cyber intelligence workflow."

];


const box = document.getElementById("reviewsBox");


if(box){

for(let i=1;i<=100;i++){

let div=document.createElement("div");

div.className="review";

div.innerHTML=

`
<b>Client #${i}</b><br>
${reviews[Math.floor(Math.random()*reviews.length)]}
<br>
<small>2026-${String(Math.ceil(Math.random()*12)).padStart(2,"0")}-${String(Math.ceil(Math.random()*28)).padStart(2,"0")}</small>
`;

box.appendChild(div);

}

}




// digital system message

console.log(
"ARFINOV OSINT SYSTEM ONLINE"
);
