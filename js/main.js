function stars() {
    
    let count = 500;
    let stary = document.querySelector('.stary');
    let i = 0;

    // Using while loop to create the star(i) up to the count of 500
    while(i < count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);  // using math random to create a random width/height wihtin the divs window
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;  // creating a random duration between 0-9
        let size = Math.random() *2;   // creating a random size between 0-1


        // display the star elements randomly along the x and y axis
        star.style.left = x+'px';
        star.style.top = y+'px';
        // display the star elements width and height using random sizes 1-2px
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 5+duration+'s';  // creating the animation duration for each star
        star.style.animationDelay = duration+'s'; 

        stary.appendChild(star);
        i++
    }
}
stars()