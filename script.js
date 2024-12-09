$(document).ready(function () {

    const icons = {
        taylor: ['acoustic'],
        chappell: ['unicorn'],
        lana: ['cherry']
    };

    $('#glasses').on('click', function() {
        window.location.href = "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02";
    });

    $('#jeans').on('click', function() {
        window.location.href = "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"; 
    });

    $('#hat').on('click', function() {
        window.location.href = "https://open.spotify.com/artist/7GlBOeep6PqTfFi59PTUUN"; 
    });

    function createRadialFallingIcons(event, iconType, sectionId) {
        const section = $(`#${sectionId}`);
        const image = section.find('img');
        
        const imageOffset = image.offset();
        const imageWidth = image.width();
        const imageHeight = image.height();

        const centerX = imageOffset.left + imageWidth / 2;
        const centerY = imageOffset.top + imageHeight * 0.1;

        const numIcons = 20; 

        for (let i = 0; i < numIcons; i++) { 
            const selectedIcons = icons[iconType];
            const icon = $('<img>').addClass('falling-icon');
            const randomIcon = selectedIcons[Math.floor(Math.random() * selectedIcons.length)];
            icon.attr('src', `${randomIcon}.png`);

            const angle = Math.random() * Math.PI * 2;
            const burstRadius = Math.random() * 200 + 50;
            
            const burstX = centerX + Math.cos(angle) * burstRadius;
            const burstY = centerY + Math.sin(angle) * burstRadius;

            icon.css({
                left: `${burstX}px`,
                top: `${burstY}px`,
                position: 'absolute',
                opacity: 1,
                transform: 'scale(1.5)'
            });

            const fallDuration = Math.random() * 3000 + 2000;
            const rotationDegree = Math.random() * 360;
            
            $('body').append(icon);

            icon.animate({
                top: `${imageOffset.top + imageHeight + 100}px`,
                left: `${burstX + (Math.random() - 0.5) * 100}px`,
                rotate: `${rotationDegree}deg`,
                opacity: 0
            }, {
                duration: fallDuration,
                easing: 'easeOutQuad',
                complete: function() {
                    $(this).remove();
                }
            });
        }
    }

    $('#taylor').on('mouseover', function (event) {
        createRadialFallingIcons(event, 'taylor', 'taylor');
    });

    $('#chappell').on('mouseover', function (event) {
        createRadialFallingIcons(event, 'chappell', 'chappell');
    });

    $('#lana').on('mouseover', function (event) {
        createRadialFallingIcons(event, 'lana', 'lana');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('header').css('background-color', '#bf8cf3');
        } else {
            $('header').css('background-color', '#ff69b4');
        }
    });

    var tayFunFacts = [
        "Here is a fun fact! Taylor Swift has a cat named Olivia Benson.",
        "Here is a fun fact! Swift is the youngest solo artist to win Album of the Year and the first female artist to win it three times.",
        "Here is a fun fact! Taylor Swift grew up on a Christmas tree farm." 
    ];

    var chapFunFacts = [
        "Here is a fun fact! Chappell Roan’s real name is Kayleigh Amstutz",
        "Here is a fun fact! Chappell Roan's stage and fashion presence has been inspired by drag queens.",
        "Here is a fun fact! Roan grew up in Willard, Missouri."
    ];

    var lanaFunFacts = [
        "Here is a fun fact! Lana Del Rey's real name is Elizabeth Woolridge Grant.",
        "Here is a fun fact! Lana Del Rey spent a substantial amount of time living and writing in the UK.",
        "Here is a fun fact! Lana Del Rey recently married a swamp boat captain."
    ];

    function getRandomFact(factsArray) {
        var randomIndex = Math.floor(Math.random() * factsArray.length);
        return factsArray[randomIndex];
    }

    $('#tayfact').text(getRandomFact(tayFunFacts));

    $('#chapfact').text(getRandomFact(chapFunFacts));

    $('#lanafact').text(getRandomFact(lanaFunFacts));

    $('#tayfactbtn').click(function() {
        $('#tayfact').text(getRandomFact(tayFunFacts));
    });

    $('#chapfactbtn').click(function() {
        $('#chapfact').text(getRandomFact(chapFunFacts));
    });

    $('#lanafactbtn').click(function() {
        $('#lanafact').text(getRandomFact(lanaFunFacts));
    });

    $('#giftsec img').on('click', function () {
        $(this).toggleClass('clicked');
    }); 
});
