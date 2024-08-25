let sliderImages = Array.from(document.querySelectorAll(".slider-container img"))

let currentSlide = 1;

let sliderNumber = document.getElementById("slider-number");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

nextBtn.onclick = nextSlide;
prevBtn.onclick = previousSlide;

let paginationElement = document.createElement('ul')
paginationElement.setAttribute('id' , 'pagination-ul')

//creat list (li)
for(let i=1 ; i <= sliderImages.length ; i++){
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index' , i);
    paginationItem.appendChild(document.createTextNode(i))

    paginationElement.appendChild(paginationItem)
}

let indicators = document.getElementById("indicators");
indicators.appendChild(paginationElement);

//get new ul
let paginationNewUl = document.getElementById('pagination-ul')
let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"))

for(let i =0; i< paginationBullets.length; i++){
    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'))
        checker();
    }
}
checker();

function checker(){
    sliderNumber.textContent = `Slide #${currentSlide} of ${sliderImages.length}`;

    removeActive();
    sliderImages[currentSlide-1].classList.add('active');
    paginationNewUl.children[currentSlide-1].classList.add('active')

    //chek if current slide is the first
    if(currentSlide == 1){
        prevBtn.classList.add("disabled")
    }
    else{
        prevBtn.classList.remove("disabled")
    }
    //chek if current slide is the last
    if(currentSlide == sliderImages.length){
        nextBtn.classList.add('disabled')
    }
    else{
        nextBtn.classList.remove("disabled")
    }
}
//revove all active classes function
function removeActive(){
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    })

    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    })
}

function nextSlide(){
    if(nextBtn.classList.contains('disabled')){
        return false
    }
    else{
        currentSlide++;
        checker();
    }
}
function previousSlide(){
    if(prevBtn.classList.contains('disabled')){
        return false
    }
    else{
        currentSlide--;
        checker();
    }
}