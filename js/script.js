const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true,
    delay : 50
});

sr.reveal(`.introduction__p`,{origin: 'top', delay: 100});
sr.reveal(`.h2, .p`,{origin: 'left', interval: 100});
sr.reveal(`.h2-2, .p2`,{origin: 'right', interval: 100});
sr.reveal(`.p__video`,{origin: 'top', interval: 100});
sr.reveal(`.iframe`,{origin: 'bottom', interval: 100});

sr.reveal(`.conclusion__p`,{origin: 'bottom', interval: 200});
sr.reveal(`.credits__texte`,{origin: 'bottom', interval: 150});
