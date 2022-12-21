//obtengo los dos elementos de flecha

const arrowLeft = document.getElementById("left-gray-arrow");
const arrowRight = document.getElementById("right-gray-arrow");

// Obteniendo el contenedor que genera el scroll
const plansContainer = document.getElementById("plans-slider");

// Obteniendo las tajetas, para saber su tamaño
const planCards = document.getElementsByClassName("plans-container__card");

// Obtenemos el tamaño de las cartas, es 0 y no 1, por el comodin
const centerCard = planCards[1].clientWidth;

// Centramos en la primera carta
plansContainer.scrollLeft = centerCard;

arrowLeft.addEventListener("click", function() {
    // Nos aseguramos de siempre mostrar la flecha de la derecha
    arrowRight.style.display = "inline-block";

    // Restamos "una scroll" para ir a la izquierda
    plansContainer.scrollLeft -= centerCard;

    // Si el scroll a la izquierda es menor/igual a 2 scrolls, quiere decir estamos en la primera
    // tarjeta, y no podemos seguir llendo a la izquierda
    if(plansContainer.scrollLeft <= centerCard*2) {
        // Ocultamos la flecha
        arrowLeft.style.display = "none";
    }
});

// Aplicamos la misma logica para la flecha de la derecha
arrowRight.addEventListener("click", function() {
    // Nos aseguramos de siempre mostrar la flecha de la izquierda
    arrowLeft.style.display = "inline-block";

    // Sumamos "un scroll" para ir a la derecha
    plansContainer.scrollLeft += centerCard;

    // Si es el scroll es mayor al centro, estamos en la última tarjeta
    // y podemos seguir llendo a la derecha
    if(plansContainer.scrollLeft >= centerCard){
        // Ocultamos la flecha
        arrowRight.style.display = "none";
    }
});