let frameIndex = 0;
let totalFrames = 16;
let spinning;
let framePrefix = 'wheelsprite';
let frameExtension = '.png';

function preloadImages(totalFrames) {
    for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `entropysprite${i}.png`;
    }
}

function startSpin() {
    if (!spinning) {
        spinning = setInterval(function() {
            frameIndex = (frameIndex + 1) % totalFrames;
            let newFrame = framePrefix + (frameIndex + 1) + frameExtension;
            $('#roulette-wheel').attr('src', newFrame);
        }, 50);
    }
}

function stopSpin() {
    clearInterval(spinning);
    spinning = null;
}

function showByType(type) {
    console.log('Showing type:', type); 
    $('.animation').hide(); 
    $('.animation').filter(function() {
        return $(this).data('type') === type;
    }).show();
}

function createStars(numStars) {
    for (let i = 0; i < numStars; i++) {
        let star = $('<div class="star"></div>');
        let x = Math.random() * 100; 
        let y = Math.random() * 100; 
        let size = Math.random() * 2 + 1;
        let animationDuration = Math.random() * 2 + 1;
        let animationDelay = Math.random() * 5;
        let opacity = Math.random() * 0.5 + 0.5;
        let colors = ['#ffffff', '#ffe9c4', '#d4fbff'];
        let color = colors[Math.floor(Math.random() * colors.length)];

        star.css({
            background: color,
            opacity: opacity,
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
            '--twinkle-duration': `${animationDuration}s`,
            '--twinkle-delay': `${animationDelay}s`,
            '--drift-duration': `${animationDuration * 5}s`,
            '--drift-delay': `${animationDelay}s`,
        });

        $('body').append(star);
    }
}

document.getElementById('interactButton').addEventListener('click', function() {
    document.getElementById('time-btn').style.display = 'inline-block';
    document.getElementById('entropy-btn').style.display = 'inline-block';
});


$(document).ready(function() {
    preloadImages(totalFrames);

    createStars(100); 

    $('#start-btn').click(startSpin);
    $('#stop-btn').click(stopSpin);

    $('#time-btn').click(function() {
        showByType('time'); 
        $('#start-btn').show();
        $('#stop-btn').show();
    });

    $('#entropy-btn').click(function() {
        showByType('entropy'); 
        $('#start-btn').hide();
        $('#stop-btn').hide();
    });

    const textParagraphs = [
        "Ludwig Boltzmann was an Austrian physicist and philosopher, born on February 20, 1844, in Vienna.", 
        "He is best known for his foundational work in statistical mechanics and thermodynamics, which paved the way for modern physics.",
        "Something Boltzmann is less well known for is his intriguing hypothesis regarding the eventual fate of the universe.", 
        "He proposed that, given enough time, the universe would eventually reach a state of maximum entropy, often referred to as 'heat death.'", 
        "In this scenario, energy would be evenly distributed, and no thermodynamic processes would be possible, leading to a static and featureless universe.",
        "Heat death, or the 'Big Freeze,' is still widely regarded as one of the most popular end-universe scenarios among modern cosmologists.", 
        "While Boltzmann is often credited with laying the foundations for this concept, he didn't see heat death as the ultimate end of the universe.",
        "Rather, he viewed it as the beginning of a new chapter—what might appear to be the universe's final state is, in fact, the start of a cycle."
    ];

    $('.lvbexplained').empty().css('visibility', 'visible').css('opacity', 1);

    function addNextCharacter(paragraphIndex, charIndex) {
        if (paragraphIndex < textParagraphs.length) {
            const characters = textParagraphs[paragraphIndex].split('');
            
            if (charIndex < characters.length) {
                let span;
                if (characters[charIndex] === ' ') {
                    span = $('<span class="fade-letter">&nbsp;</span>').css('margin-right', '0.25em');
                } else {
                    span = $('<span class="fade-letter"></span>').text(characters[charIndex]);
                }
                $('.lvbexplained').append(span);
                
                span.css('opacity', 0).animate({ opacity: 1 }, {
                    duration: 1500,
                    easing: 'swing',
                    queue: false
                });
                
                setTimeout(function() {
                    addNextCharacter(paragraphIndex, charIndex + 1);
                }, 25);
            } else {
                $('.lvbexplained').append('<br><br>');
                setTimeout(function() {
                    addNextCharacter(paragraphIndex + 1, 0);
                }, 500);
            }
        }
    }

    addNextCharacter(0, 0);
});