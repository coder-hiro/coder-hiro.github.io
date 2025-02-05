$(".mvInner").vegas({
    slides: [
        { src: "./img/zoom01.webp" },
        { src: "./img/zoom02.webp" },
        { src: "./img/zoom03.webp" },
        { src: "./img/zoom04.webp" },
        { src: "./img/zoom05.webp" },
        { src: "./img/zoom06.webp" },
        { src: "./img/zoom07.webp" },
        { src: "./img/zoom08.webp" },
        { src: "./img/zoom09.webp" },
    ]
});

if(window.matchMedia('(max-width: 767px)').matches) {
    $(".mvInner").vegas({
        slides: [
            { src: "./img/sp/zoom01_sp.webp" },
            { src: "./img/sp/zoom02_sp.webp" },
            { src: "./img/sp/zoom03_sp.webp" },
            { src: "./img/sp/zoom04_sp.webp" },
            { src: "./img/sp/zoom05_sp.webp" },
            { src: "./img/sp/zoom06_sp.webp" },
            { src: "./img/sp/zoom07_sp.webp" },
            { src: "./img/sp/zoom08_sp.webp" },
            { src: "./img/sp/zoom09_sp.webp" },

        ]
    });
}