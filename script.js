let frameIndex = 0;
let totalFrames = 16;
let spinning;
let framePrefix = 'wheelsprite';
let frameExtension = '.png';

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
    $(`.animation`).filter(function() {
        return $(this).data('type') === type;
    }).show();
}

function createStars(numStars) {
    for (let i = 0; i < numStars; i++) {
        let star = $('<div class="star"></div>');
        let x = Math.random() * 100; 
        let y = Math.random() * 100; 
        let size = Math.random() * 2 + 1; 
        let opacity = Math.random() * 0.5 + 0.2;

        star.css({
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity
        });

        $('body').append(star);
    }
}

$(document).ready(function() {
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

    $('#start-btn').hide();
});
