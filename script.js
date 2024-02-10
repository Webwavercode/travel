let items = document.querySelectorAll(".slider .list .item");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");


//config param
let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }

    showSlider();
}

//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive =  countItem - 1;
    }

    showSlider();
}

//auto run slider
let refreshInterval = setInterval(()=>{
    next.click();
},5000);

function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailctiveOld = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove('active');
    thumbnailctiveOld.classList.remove('active');

    //active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    //clear auto time run slider
    clearInterval(refreshInterval);

    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);

}

function toggleReadMore(item) {
    const content = item.querySelector('.content');
    const readMoreLink = content.querySelector('.read-more');

    // Toggle the 'active' class on the Read More link
    readMoreLink.classList.toggle('active');

    // Toggle the 'active' class on the Read More content
    const readMoreContent = content.querySelector('.read-more-content');
    readMoreContent.classList.toggle('active');
}
