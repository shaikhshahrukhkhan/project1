// ..................Accordion-Section...........

let accordh3=document.querySelectorAll(".accordion-sect h3")
let allicon=document.querySelectorAll("h3 .fa-angle-down")
let accordbodyd=document.querySelectorAll(".accordion-sect .accord-body")
accordh3.forEach((value,index)=>{
	value.onclick=function(){
		allicon.forEach((value,index)=>{
			value.style.transform="rotate(360deg)"
		})
		allicon[index].style.transform="rotate(180deg)"
		accordbodyd.forEach((value,index)=>{
			value.style.display="none"
		})
		accordbodyd[index].style.display="block"
	}
})


// ................Start Header-Section..............
$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(".main-ul").toggleClass('show')
    })
})
$(window).scroll(function(){
	let scroll=$(window).scrollTop();
	if(scroll>200){
		$('.scroll-top').fadeIn();
	}
	else{
		$('.scroll-top').fadeOut();
	}

})
$(document).ready(function(){
    $('.scroll-top').click(function(){
        $(window).scrollTop(0);
    })
})

// .........................Start Typewriter-Section..........................

let textArray = ["AM  UI/UX DESIGNER |.","am front-end developer |."];
let typeWriterElement = document.querySelector('.typewriter-text');


// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
 		let rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++)
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);
	
// ....................Close Typewriter-Section...................
// ...............................
// let navli_a=document.querySelectorAll(".main-ul a")
// console.log(navli_a)
// navli_a.forEach((value,index)=>{
// 	value.onclick=function(){
// 		value.style.color="none"
// 		navli_a[index].style.color="aqua"
// 	}
	
// })