// ========================================//
//                Stary sky
// ========================================//

function snowfall() {
    
    let count = 500;
    let snowy = document.querySelector('.snowy');
    let i = 0;

    // Using while loop to create the star(i) up to the count of 500
    while(i < count){
        let snow = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);  // using math random to create a random width/height wihtin the divs window
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;  // creating a random duration between 0-9
        let size = Math.random() *2;   // creating a random size between 0-1


        // display the star elements randomly along the x and y axis
        snow.style.left = x+'px';
        snow.style.top = y+'px';
        // display the star elements width and height using random sizes 1-2px
        snow.style.width = 1+size+'px';
        snow.style.height = 1+size+'px';

        snow.style.animationDuration = 5+duration+'s';  // creating the animation duration for each star
        snow.style.animationDelay = duration+'s'; 

        snowy.appendChild(snow);
        i++
    }
}
snowfall()



// ========================================//
//            fade in on scroll
// ========================================//

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 1,                         // makes sure the target only fades in once the entire section is in view
    rootMargin: "0px 0px -100px 0px"      // target only fades in once 100px past target (centers fade on the view page better)
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {          // prevents all entrys triggering on page load
          return; 
        }   else {
            entry.target.classList.add('appear');    // adding appear class on target
            appearOnScroll.unobserve(entry.target);  //stop looking at target once target has appeared
        }
    });
}, appearOptions);

// triggering faders 
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});