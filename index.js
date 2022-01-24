// Esse código altera os ícones do font-awesome de tempos em tempos.

const element = document.getElementById("iconsCarrousel");
const fontIcons = ["fas fa-heartbeat", 'fas fa-music', "far fa-thumbs-up", 'fab fa-css3-alt', 'fas fa-forward', 'fab fa-html5', 
                    'fas fa-heart-broken', "far fa-hand-peace", 'fas fa-fire-alt', "far fa-grin", "fab fa-js-square" ]
let index = 0
setInterval(function(){            
    element.className = fontIcons[index] + " text-center"
    ++index
    if(fontIcons.length <= index)
        index = 0     

    }, 1500)