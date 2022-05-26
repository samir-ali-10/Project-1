document.querySelector(".settings .fa-gear").onclick = function(){

    document.querySelector(".settings").classList.toggle("open");
};


const colorli = document.querySelectorAll(".color-list li");
let mainColor = localStorage.getItem("color_option");

if(mainColor !== null)
{
    document.documentElement.style.setProperty('--test-color' , mainColor);

    document.querySelectorAll(".color-list li").forEach(element => {

        element.classList.remove("active");


        if(element.dataset.color === mainColor)
        {
            element.classList.add("active");
        }
    });
    
}

colorli.forEach(li => {

    li.addEventListener("click" , (e) => {

        document.documentElement.style.setProperty('--test-color' , e.target.dataset.color);

        localStorage.setItem("color_option" , e.target.dataset.color);

        handleActive(e);

    });

});

let backgroundOption = true;

let backgroundInterval;

let backgroundLocal = localStorage.getItem("background_option");

if(backgroundLocal !== null){

    if(backgroundLocal === 'true')
    {
        backgroundOption = true;
    }
    else
    {
        backgroundOption = false;
    }

    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove("active");
    });

    if(backgroundLocal === 'true')
    {
        document.querySelector(".random-background .yes").classList.add("active");
    }
    else
    {
        document.querySelector(".random-background .no").classList.add("active");
    }

}



let rndmBackground = document.querySelectorAll(".random-background span");

rndmBackground.forEach(sp => {

    sp.addEventListener("click" , (e) => {

        handleActive(e)

        if(e.target.dataset.background === 'yes'){

            backgroundOption = true;

            randomizeBackground();

            localStorage.setItem("background_option" , true);
        }
        else{
            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option" , false);

        }

    });

});



let landingPage = document.querySelector(".landing-page");

let imgsArray = ["https://github.com/ElzeroWebSchool/SpecialDesign/blob/master/imgs/01.jpg?raw=true" , "https://github.com/ElzeroWebSchool/SpecialDesign/blob/master/imgs/02.jpg?raw=true" , "https://github.com/ElzeroWebSchool/SpecialDesign/blob/master/imgs/03.jpg?raw=true" , "https://github.com/ElzeroWebSchool/SpecialDesign/blob/master/imgs/04.jpg?raw=true"];


function randomizeBackground(){
    
        if(backgroundOption === true){
        
                backgroundInterval = setInterval(function(){
            
        let randNumber = Math.floor(Math.random() * imgsArray.length);

        landingPage.style.backgroundImage = 'url('+imgsArray[randNumber] +')';

        }, 1000);
    }

}

randomizeBackground();


let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
    
      // Skills Offset Top
        let skillsOffsetTop = ourSkills.offsetTop;
    
      // Skills Outer Height
        let skillsOuterHeight = ourSkills.offsetHeight;

      // Window Height
        let windowHeight = this.innerHeight;
    
      // Window ScrollTop
        let windowScrollTop = this.pageYOffset;
    
        if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        
            let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        
            allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;

    });
}

};

let gallery = document.querySelectorAll(".gallery img");

gallery.forEach(img => {

    img.addEventListener('click' , (e) => {
    
            let overlay = document.createElement("div");
    
            overlay.className = "popup-overlay";
    
            document.body.appendChild(overlay);
    
            let popupBox = document.createElement("div");
    
            popupBox.className = "popup-box";
    
            if(img.alt !== null){
        
                    let imgHeading = document.createElement("h3");
        
                    let imgText = document.createTextNode(img.alt);
        
                    imgHeading.appendChild(imgText);
        
                    popupBox.appendChild(imgHeading);
                }
        
                let popupImage = document.createElement("img");
        
                popupImage.src = img.src;
        
                popupBox.appendChild(popupImage);
        
                document.body.appendChild(popupBox);
        
                let closeButton = document.createElement("span");
        
                let closeText = document.createTextNode("X");
        
                closeButton.appendChild(closeText);
        
                closeButton.className = "close-button";
        
                popupBox.appendChild(closeButton);
        
            });
        });
        
        
        document.addEventListener("click" , function(e) {
            
                if(e.target.className == "close-button"){
                
                        e.target.parentNode.remove();
                
                        document.querySelector(".popup-overlay").remove();
                    }
                });
                
                
                const allBullets = document.querySelectorAll(".nav-bullets .bullets");
                
                allBullets.forEach(bullet => {
                    
                        bullet.addEventListener("click" , (e) => {
                        
        document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: "smooth"
            });
        });
    
    });
    
    function handleActive(ev) {
        
            ev.target.parentElement.querySelectorAll(".active").forEach(element => {

                    element.classList.remove("active");
            
                });
            
                ev.target.classList.add("active");
            }
            
            
            let bulletsSpan = document.querySelectorAll(".bullets-option span");
            
            let bulletsContainer = document.querySelector(".nav-bullets");
            
            let bulletsLocalItem = localStorage.getItem("bullets_option");
            
            if(bulletsLocalItem !== null)
            {
                    bulletsSpan.forEach(span => {
                    
                            span.classList.remove("active");
                        });
                    
                        if(bulletsLocalItem === "block")
                        {
                                bulletsContainer.style.display = "block";

                                document.querySelector(".bullets-option .yes").classList.add("active");
                            }
                        
                            else
                            {
        bulletsContainer.style.display = "none";

        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bulletsSpan.forEach(span => {
    
        span.addEventListener("click" , (e) => {
        
                if(span.dataset.display === "show"){
            
                        bulletsContainer.style.display = "block";
            
                        localStorage.setItem("bullets_option" , "block");
                    }
            
                    else{
                
                            bulletsContainer.style.display = "none";
                
                            localStorage.setItem("bullets_option" , "none");
                        }
                
                        handleActive(e);
                    });
                
                });
                
                
                document.querySelector(".reset-option").onclick = function () {
                    
                        localStorage.removeItem("bullets_option");
                        localStorage.removeItem("color_option");
                        localStorage.removeItem("background_option");
                    
                        window.location.reload();
                    }


let toggleMenu = document.querySelector(".fa-bars");

let links = document.querySelector(".links");

toggleMenu.onclick = function(e) {

    e.stopPropagation();

    this.classList.toggle("menu-active");

    links.classList.toggle("open");
};

document.onclick = function(e) {

    if(e.target !== toggleMenu && e.target !== links){

        if(links.classList.contains("open")){

            toggleMenu.classList.toggle("menu-active");

            links.classList.toggle("open");
        }
    }
}

links.onclick =function(e) {
    e.stopPropagation();
}