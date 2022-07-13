'use strict';

const foodArray=[];
function FoodInfo(foodName,type,price){
this.id=Math.floor(1000+Math.random()*9000);
this.foodName=foodName;
this.type=type;
this.price=price;
foodArray.push(this);
}
// const one=new FoodInfo("maasd","adsdsa",33);
// //creating table and  header
// const table= document.createElement("table");
// const tableHeader=document.createElement("th");
// const tableRow=document.createElement("tr");
// FoodInfo.prototype.renderInfo= function(){
//     tableHeader.textContent=this.id;
//     tableHeader.textContent=this.foodName;
//     tableHeader.appendChild(tableRow);
//     table.appendChild(tableHeader);
//     document.body.appendChild(table);

//     //creating table content




// }

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
}

// function renderFood(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i].renderInfo();
//     }
// }
// renderFood(foodArray);