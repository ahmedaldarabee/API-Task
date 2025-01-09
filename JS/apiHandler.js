
let username = document.querySelector(".name");
let email = document.querySelector(".email");
let img = document.querySelector(".img");

let left = document.querySelector(".left");
let right = document.querySelector(".right");

let leftSection = document.querySelector(".left-section");
let rightSection = document.querySelector(".right-section");

let xmlRequest = new XMLHttpRequest();
let counter = 1;

let responseData;

xmlRequest.open("GET","https://reqres.in/api/users");

xmlRequest.onload = function(){
    responseData = JSON.parse(this.response);
    showData(responseData);
    leftBtnHandler();
    rightBtnHandler();
}

function rightBtnHandler(){
    right.addEventListener("click",function() {
        counter < 6 ? counter++ : counter=6;
        showData();
    });
}

function leftBtnHandler(){
    left.addEventListener("click",function() {
        counter > 1 ? counter-- : counter=1;
        showData();
    });
}

function appearanceBtnHandler(){
    counter > 1 ? leftSection.style.display="block" : leftSection.style.display="none";
    counter < 6 ? rightSection.style.display="block" :rightSection.style.display="none";
}


function showData(){
    username.innerHTML=responseData.data[counter-1].first_name;
    email.innerHTML=responseData.data[counter-1].email;
    img.src=responseData.data[counter-1].avatar;
    appearanceBtnHandler();
}

xmlRequest.send();