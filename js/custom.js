/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

let currentLang = "en";

function setLanguage(change)
{

	if(change)
	{

		if(currentLang == "en")
		{
			var clickableImage = document.getElementById("eng_");
			clickableImage.id = "hr_";
			clickableImage.src = "images/croatia.png";

			currentLang = "hr"
		}
		else
		{
			var clickableImage = document.getElementById("hr_");
			clickableImage.id = "eng_";
			clickableImage.src = "images/united-kingdom.png";

			currentLang = "en"
		}

		
	}

	var language = [];

if(currentLang == "hr")
{
	language = [
		{
			id: "logo_",
			txt: "David Gaube Yoga",
		},
		{
			id: "maintext_",
			txt: "Učinite nemoguće mogućim",
		},
		{
			id: "Naslovna_",
			txt: "Naslovna",
		},
		{
			id: "omeni_",
			txt: "O meni",
		},
		{
			id: "Galerija_",
			txt: "Galerija",
		},
		{
			id: "Subscribe_",
			txt: "Subscribe",
		},
		{
			id: "omeni1_",
			txt: "O meni",
		},
		{
			id: "about_",
			txt: "David, hrvatski učitelj joge, krenuo je na transformacijsko putovanje nakon završetka sveobuhvatnog programa obuke za učitelje. S dubokom žeđi za znanjem, tražio je prilike da uči od priznatih učitelja diljem svijeta, specijalizirajući se za filozofiju joge i umijeće poučavanja stoja na rukama. Danas David putuje, dijeleći svoju strast i osnažujući učenike da pronađu ravnotežu, unutarnji mir i radost. Njegova priča ilustrira transformacijsku moć joge i njegovu predanost pomaganju drugima da otkriju svoj puni potencijal.",
		},
		{
			id: "Galerija1_",
			txt: "Galerija",
		},
		{
			id: "sub_",
			txt: "Pretplati se",
		},
		{
			id: "name_",
			txt: "Ime i prezime",
		},
		{
			id: "mail_",
			txt: "Email*",
		},	
	]
}
else
{
	language = [
		{
			id: "logo_",
			txt: "David Gaube Yoga",
		},
		{
			id: "maintext_",
			txt: "Make the Impossible Possible",
		},
		{
			id: "Naslovna_",
			txt: "Home",
		},
		{
			id: "omeni_",
			txt: "About",
		},
		{
			id: "Galerija_",
			txt: "Gallery",
		},
		{
			id: "Subscribe_",
			txt: "Subscribe",
		},
		{
			id: "omeni1_",
			txt: "About me",
		},
		{
			id: "about_",
			txt: "David, a Croatian yoga teacher, embarked on a transformative journey after completing a comprehensive teacher training program. With a deep thirst for knowledge, he sought opportunities to learn from esteemed teachers worldwide, specializing in yoga philosophy and the art of teaching handstands. Today, David travels, sharing his passion and empowering students to find balance, inner peace, and the joy of mastering handstands. His story exemplifies yoga's transformative power and his commitment to helping others unlock their true potential.",
		},
		{
			id: "Galerija1_",
			txt: "Gallery",
		},
		{
			id: "sub_",
			txt: "Subscribe",
		},
		{
			id: "name_",
			txt: "Name",
		},
		{
			id: "mail_",
			txt: "Email*",
		},	
	]
}

language.forEach(function(item) {

	var outputElement = document.getElementById(item.id);

	if (outputElement.tagName === "INPUT") {

		outputElement.placeholder = item.txt;

	  } else {
		outputElement.innerHTML = item.txt;
	  }


  });


}

async function sendMail(name, email)
{
  return await Email.send({
    SecureToken : "141b84e8-56ce-4d8c-a4a0-8dfce9160730",
    To : "Davidgaubeyoga@gmail.com",
    //To : "viktoreeeee@gmail.com",
    From : "noreply.notification.provider@gmail.com",
    Subject : `Novi zahtjev za Newsletter!`,
    Body : `Ime: ${name} <br/> ${email}`})


	//noreply.notification.provider@gmail.com
	//CD2D71428F72D4E88DD61C270F1EADA05167
	//smtp.elasticemail.com
	//2525
}

async function trySendMail()
{
	var nameInput = document.getElementById("name_").value;
	var mailInput = document.getElementById("mail_");
	var btnSub = document.getElementById("sub_");
	
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if (emailPattern.test(mailInput.value)) {
		//alert("Valid email address!");

		var result = sendMail(nameInput, mailInput.value)
		result.then(function(resultValue) {

		//	console.log(resultValue)

		if(resultValue == "OK")
		{
			mailInput.style.border = "#647E6899 solid 1px"; // Valid email style
			btnSub.removeEventListener("click", checkButtonClickHandler);
			btnSub.addEventListener("click", function(event) {
				event.preventDefault()
			});
	
			btnSub.style.backgroundColor = 'var(--high-blue)';
			btnSub.style.color = 'var(--light-blue)';
			btnSub.innerHTML = 'Thanks! 😊';
		}
		else
		{
			mailInput.style.border = "2px solid red"; // Invalid email style

		  }

		});


	} else {
		//alert("Invalid email address!");

		mailInput.style.border = "2px solid red"; // Invalid email style
	}

	// console.log(nameInput)
	// console.log(mailInput.value)

}


$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
		document.body.style.overflow = 'scroll'

	}, 500);
	
	/* Language
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var currentLanguage = navigator.language || navigator.userLanguage;
		//currentLanguage = "hr"
		var changeLang = "hr" == currentLanguage;
		//console.log("currentLang:", currentLang);
		//console.log("currentLanguage:", currentLanguage);
		//console.log("changeLang:", changeLang);
	
		setLanguage(changeLang)
	  });
	

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
		
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#myCarousel').carousel({
        interval: 2000
     });


});

window.onload = function() {


	document.getElementById("sub_").addEventListener("click", checkButtonClickHandler);





	var clickableImage = document.getElementById("eng_");
  
	clickableImage.addEventListener("click", function() {
	  setLanguage(true);
	});

	let elements = document.getElementById("navbarsExample04").getElementsByClassName("nav-item");

	for (let index = 0; index < elements.length; index++) {
		const element = elements[index];

		element.onclick = function() {
			$('[aria-label="Toggle navigation"]').click();
		}
	}
}

function checkButtonClickHandler(event) {
	event.preventDefault(); // Prevent the default form submission behavior

		trySendMail()
}