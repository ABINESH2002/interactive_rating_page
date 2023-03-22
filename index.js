const buten = document.querySelectorAll(".opt");
const submit_btn = document.querySelector(".btn");
const res = document.querySelector(".res_op span");
const box_1 = document.querySelector(".info");
const box_2 = document.querySelector(".result");

let rate = buten.forEach((rate_btn) => {
    rate_btn.addEventListener("click" ,() =>{
        removeActive();
        rate_btn.classList.add("active");
        rate = rate_btn.innerText;
        res.innerText = rate_btn.innerText;
    });
});

const removeActive = () =>{
    buten.forEach((rate_btn) => {
        rate_btn.classList.remove("active");
    });
};

submit_btn.addEventListener("click", () =>{
    if(rate>0){
        box_1.style.display="none";
        box_2.style.display="flex";
        console.log("submit");
    }
    else{
        alert("please give your rating");
    }
});

