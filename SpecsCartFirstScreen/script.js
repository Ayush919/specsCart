window.onload = () => {

    let enableClass = document.getElementById("mainImage");
    let specsImg = document.getElementById("specsImg");
    let cardsImage = document.getElementById("cardsImage");
    let penPaperImg = document.getElementById("penPaperImg");

    enableClass.classList.add("active");
    setTimeout(function () {
        specsImg.classList.add("active1");
    }, 1000);

    setTimeout(function () {
        cardsImage.classList.add("active2");
    }, 2000);

    setTimeout(function () {
        penPaperImg.classList.add("active3");
    }, 3000);

}

const activateListItem = (list_Item) => {
    if (window.matchMedia("(min-width:1025px)").matches) {
        let listItems = document.getElementsByClassName("zoomOut");
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('active');
        }
        let clickedItem = document.getElementById(list_Item);
        clickedItem.classList.add('active');
    }

}

const comparison = () => {
    document.getElementById("imageStatus").style.width =
        document.getElementById("statusChangeSlider").value + "%";
}

