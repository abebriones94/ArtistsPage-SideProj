// Bring in everything we need

const sliderContainer = document.querySelector(".slider-container"); // The entire container
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length; // Bringing in all the divs that are in the slide 'right' (background images)

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`; // Negative because I want it to go up. I want to get the LAST index. Remember index is 0 based. Multipled by 100 because it takes up 100%. Basically this puts the slides in the correct locations I need them in 

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => { // Taking in direction as parameter  
  const sliderHeight = sliderContainer.clientHeight; // Will give slider height based on screen size (dynamic) 
  if (direction === "up") {
    activeSlideIndex++; // Increment by 1 
    if (activeSlideIndex > slidesLength - 1) { // If it gets to the end, it goes back to the beginning 
      activeSlideIndex = 0;
    }
  } else if (direction === "down") { 
    activeSlideIndex--; // Take away 1 
    if (activeSlideIndex < 0) { // If less than 0, it gets sent to the last index 
      activeSlideIndex = slidesLength - 1; 
    }
  }

  slideRight.style.transform = `translateY(-${  // Allows it to move up and down. It will translate on the Y Axis. (Negative so it can go up) 
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${ // Positive allows it go to the opposite up as above 
    activeSlideIndex * sliderHeight
  }px)`;
};
