let images = document.querySelectorAll(".gallery img");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let currentIndex = 0;

function openModal(index){
    modal.style.display = "block";
    modalImg.src = images[index].src;
    currentIndex = index;
}

function closeModal(){
    modal.style.display = "none";
}

function changeImage(direction){
    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    modalImg.src = images[currentIndex].src;
}

/* Klavyeden geçiş (isteğe bağlı, çok güzel oluyor) */
document.addEventListener("keydown", function(e){
    if (modal.style.display === "block") {
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "Escape") closeModal();
    }
});
