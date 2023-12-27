 // Get the navbar element
 var navbar = document.getElementById("main-navbar");
    
// Get the initial offset of the navbar
var offset = navbar.offsetTop;
    
// Function to handle scrolling
function handleScroll() {
    if (window.pageYOffset > offset) {
        // Add a class to the navbar to make it fixed
        navbar.classList.add("fixed-navbar");
    } else {
        // Remove the class when scrolled back to the top
        navbar.classList.remove("fixed-navbar");
    }
}
    
// Attach the handleScroll function to the scroll event
window.onscroll = function () {
    handleScroll();
};
    
// Call handleScroll on page load in case the page is initially scrolled
handleScroll();


ScrollReveal({ 
    reset: true,

});

ScrollReveal().reveal('.content h1', {delay: 200});

/*typed js*/
const typed = new Typed('.typingjs', {
    strings:['I am currently studying at Universitas Pasundan'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true,
});