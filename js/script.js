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