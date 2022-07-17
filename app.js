'use strict';

const foodArray=[];
function FoodInfo(foodName,type,price){
this.id=Math.floor(1000+Math.random()*9000);
this.foodName=foodName;
this.type=type;
this.price=price;
foodArray.push(this);
}

FoodInfo.prototype.renderInfo= function(){
    
}

//call the element by id
const form= document.getElementById("form1");
//add event listeners
form.addEventListener("submit",handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let name=event.target.foodname.value;
    let type=event.target.select.value;
    let price1=event.target.price.value;
    const f1=new FoodInfo(name,type,price1);
    // f1.renderInfo();
    saveData();
}

// save data 
function saveData(){
    let arrayStringify= JSON.stringify(foodArray);
    localStorage.setItem( "Food" , arrayStringify);
}



// function renderFood(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i].renderInfo();
//     }
// }
// renderFood(foodArray);