var menuButton = document.getElementById('mobile-menu-btn');
var mobileMenuNavItems = document.getElementsByClassName('mobile-menu-nav-item');

var navButton = document.querySelectorAll('#nav a');
for (let index = 0; index < navButton.length; index++) {
    let element = navButton[index];
    
    element.addEventListener('click', hideMobileMenu);
}

// Games slider
const gamesSliders = document.querySelectorAll("#games-slider .slider-img");
var gamesSliderIndex = 0;
changeGamesSlider(gamesSliderIndex);

var movieSliderInterval = setInterval(changeGamesSlider, 5000);

function changeGamesSlider() {
    gamesSliderIndex++;

    if (gamesSliderIndex >= gamesSliders.length) {
        gamesSliderIndex = 0;
    }

    for (let i = 0; i < gamesSliders.length; i++) {
        gamesSliders[i].style.display = "none";
    }

    gamesSliders[gamesSliderIndex].style.display = "block";            
}

var gamesSliderLeftArror = document.querySelector('#games-slider .slider-arrow-left');
var gamesSliderRightArror = document.querySelector('#games-slider .slider-arrow-right');

gamesSliderLeftArror.addEventListener('click', () => {
    gamesSliderIndex -= 2;

    if (gamesSliderIndex < -1) gamesSliderIndex = gamesSliders.length - 2;

    clearInterval(movieSliderInterval);
    movieSliderInterval = setInterval(changeGamesSlider, 5000);

    changeGamesSlider(gamesSliderIndex);
});

gamesSliderRightArror.addEventListener('click', () => {
    changeGamesSlider();

    clearInterval(movieSliderInterval);
    movieSliderInterval = setInterval(changeGamesSlider, 5000);
});


// Apps slider
const appsSlider = document.querySelectorAll("#apps-slider .slider-img");
var appsSliderIndex = 0;
changeAppsSlider(appsSliderIndex);

var appSliderInterval = setInterval(changeAppsSlider, 5000);

function changeAppsSlider() {
    appsSliderIndex++;

    if (appsSliderIndex >= appsSlider.length) {
        appsSliderIndex = 0;
    }

    for (let i = 0; i < appsSlider.length; i++) {
        appsSlider[i].style.display = "none";
    }

    appsSlider[appsSliderIndex].style.display = "block";            
}

var appsSliderLeftArror = document.querySelector('#apps-slider .slider-arrow-left');
var appsSliderRightArror = document.querySelector('#apps-slider .slider-arrow-right');

appsSliderLeftArror.addEventListener('click', () => {
    appsSliderIndex -= 2;

    if (appsSliderIndex < -1) appsSliderIndex = appsSlider.length - 2;

    clearInterval(appSliderInterval);
    appSliderInterval = setInterval(changeAppsSlider, 5000);

    changeAppsSlider(appsSliderIndex);
});

appsSliderRightArror.addEventListener('click', () => {
    changeAppsSlider();

    clearInterval(appSliderInterval);
    appSliderInterval = setInterval(changeAppsSlider, 5000);
});


function hideMobileMenu()
{
    for(let mobileMenuNavItem of mobileMenuNavItems)
    {   
        if(mobileMenuNavItem.className.indexOf('open') != -1){
            mobileMenuNavItem.classList.remove('open');
        }
    }
}

function hideAndShowMobileMenu()
{
    for(let mobileMenuNavItem of mobileMenuNavItems)
    {   
        if(mobileMenuNavItem.className.indexOf('open') == -1){
            mobileMenuNavItem.classList.add('open');
        }else {
            mobileMenuNavItem.classList.remove('open');
        }
    }
}

menuButton.addEventListener('click', hideAndShowMobileMenu);


// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.querySelector('#contact-form').addEventListener('submit', sendEmail);        

function sendEmail(e) {
    e.preventDefault();

    const name = document.querySelector('#contact-form [name=name]').value;
    const email = document.querySelector('#contact-form [name=email]').value;
    const message = document.querySelector('#contact-form [name=message]').value;

    const sendBtn = document.querySelector('.contact-send-button');
    sendBtn.setAttribute('disabled', '');

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "vubamanh05@gmail.com",
        Password: "04DBD37B3EDC5ECF51CCAF258F00C83623AF",
        To: 'lta@lta-indie.com',
        From: "vubamanh05@gmail.com",
        Subject: "User Contact",
        Body: `<h1>${email} contact : </h1><p>${message}</p>`,
    })
    .then(function (message) {
        console.log(message);
        openModal();
        sendBtn.removeAttribute('disabled');
    })
    .catch(function (error) {
        console.log(error);
        openModal();
        sendBtn.removeAttribute('disabled');
    });
}