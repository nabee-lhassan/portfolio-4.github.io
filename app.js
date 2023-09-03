
// ******** main element of the whole body start ****************


let main = document.querySelector('.main')

// ******** main element of the whole body end ****************



// animation on scroll js start
main.addEventListener('scroll', function() {				
				
    let content = document.querySelectorAll(".sec")				
    content.forEach(function(e){				
    let contentposition = e.getBoundingClientRect().top;				
    let screenposition = window.innerHeight /1.7;				
    if (contentposition < screenposition){				
    
        if(e.classList.contains("bg-anim")){
            e.style.display = "block";
        }


    }				
    })				
            
    })		


// animation on scroll js end

// all html element here start

let sec_1 = document.querySelector('.sec_1')
let colum_1 = document.querySelector('.sec_1 .colum-1')

let sec_2 = document.querySelector('.sec-2 .bg-anim')



let cursor = document.querySelector('.cursor-effect')


document.addEventListener("mousemove", function(e) {

    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
    document.querySelector(".cursor-effect").style.display = "block";
    
    

})

document.addEventListener("mouseleave", function(e) {

    document.querySelector(".cursor-effect").style.display = "none";
    

})



// section one event start


sec_1.addEventListener("mousemove", function(e) {

document.querySelector(".inner-cursor").classList.add("cursor-anim");
document.querySelector(".inner-cursor").classList.remove("cursor-anim-out");
document.querySelector(".inner-cursor").style.display = "flex";
document.querySelector(".inner-cursor").style.left = (e.x -15) + "px";
document.querySelector(".inner-cursor").style.top = (e.y -120) + "px";
document.querySelector(".inner-cursor").style.transform = "scale(1.5)";
document.querySelector(".inner-cursor").style.opacity = "1";
document.querySelector(".cursor-effect").style.zIndex = "-1";




})


sec_1.addEventListener("mouseleave", function(e) {
  

document.querySelector(".inner-cursor").style.transform = "scale(0)";
document.querySelector(".inner-cursor").style.opacity = "0";

document.querySelector(".cursor-effect").style.display = "none";
document.querySelector(".cursor-effect").style.zIndex = "0";
document.querySelector(".inner-cursor").classList.add("cursor-anim-out");
document.querySelector(".inner-cursor").classList.remove("cursor-anim");


})


// section one event end




// section one colum one event start

colum_1.addEventListener("mouseover", function() {
    
    document.querySelector(".inner-cursor").setAttribute("style", "animation-name: more-scale;animation-duration: 0.5s;animation-fill-mode: forwards;animation-delay: 0;");

})


colum_1.addEventListener("mouseout", function() {
    
    document.querySelector(".inner-cursor").setAttribute("style", "animation-name: less-scale;animation-duration: 0.5s;animation-fill-mode: forwards;animation-delay: 0;");


})


// section one colum one event end


// section tow event start

sec_2.addEventListener("mousemove", function (e){

document.querySelector('.div-moon').style.display = "block";
document.querySelector('.div-moon').style.left =( e.x -390) + "px"
document.querySelector('.div-moon').style.top =( e.y -80) + "px"

})

sec_2.addEventListener("mouseleave", function (e){

document.querySelector('.div-moon').style.display = "none";


})


// section tow event end