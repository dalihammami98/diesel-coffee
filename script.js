function alpha(ch) {
          ch=ch.toUpperCase();
          i=0
          while(ch.charAt(i)>='A' && ch.charAt(i)<='Z' && i<ch.length )
            i ++;
          return i ==ch.length;

}
function verif() {
  var Name=document.getElementById('name').value;
  var Email=document.getElementById('email').value;
  var Message=document.getElementById('message').value;
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(Name===""){
    alert("Le champ Name est obligatoire. Veuillez le remplir");
    return;
  }
  else if (!alpha(Name)) {
    alert("Le champ  Name est obligatoirement une chaine de caractére.")
    return;

    }
    else if (Email === "") {
    alert("Le champ Email est obligatoire. Veuillez le remplir.");
    return;
    }
    else if (!regexEmail.test(Email)) {
    alert("Veuillez saisir une adresse e-mail valide.");
    return;
    }
    else if (Message === "") {
    alert("Le champ Message est obligatoire. Veuillez le remplir.");
    return;
    }
}

const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});


menuCloseButton.addEventListener("click", () => menuOpenButton.click());
navLinks.forEach(link =>{
    link.addEventListener("click" ,() => menuOpenButton.click())
});
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween : 25,
  
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
  });
