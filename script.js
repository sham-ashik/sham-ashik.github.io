document.querySelectorAll(".slider").forEach((slider) => {

    let slideIndex = 0;

    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelectorAll(".dot");

    function showSlide(index){
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    dots.forEach(dot => {
        dot.addEventListener("click", function(){
            slideIndex = parseInt(this.getAttribute("data-index"));
            showSlide(slideIndex);
        });
    });

    function autoSlide(){
        slideIndex++;
        if(slideIndex >= slides.length){
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    setInterval(autoSlide, 4000);

});
