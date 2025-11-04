
// Counter Start
let minusBtn = document.getElementById("minusBtn");
let plusBtn = document.getElementById("plusBtn");
let ruselt = document.getElementById("ruselt");

let alartOne = document.getElementById("alartOne");
let alartTwo = document.getElementById("alartTwo");

plusBtn.addEventListener("click",()=>{
    if (ruselt.innerText < 5) {
        ruselt.innerText++
        alartOne.setAttribute("hidden",true)
        alartTwo.setAttribute("hidden",true)
    } else {
        alartOne.removeAttribute("hidden")
        alartTwo.setAttribute("hidden",true)
    }
})

minusBtn.addEventListener("click",()=>{
    if (ruselt.innerText > 0) {
        ruselt.innerText--
        alartTwo.setAttribute("hidden",true)
        alartOne.setAttribute("hidden",true)
    } else {
        alartTwo.removeAttribute("hidden")
        alartOne.setAttribute("hidden",true)
    }
})

// Counter End

// counter up part start
let numberBox = document.querySelectorAll(".numberBox");
let arr = Array.from(numberBox);

arr.map((item)=>{
    let counter = 0;
    function count() {
        counter++;
        item.innerHTML = counter;
        if (counter == item.dataset.a) {
            clearInterval(stop);
        }
    } 
    let stop = setInterval(function () {
        count();
    }, 3000 / item.dataset.a);
});

// counter up part End