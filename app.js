'use strict';

const foodArray=[];
function FoodInfo(foodName,type,price){
this.id=Math.floor(1000+Math.random()*9000);
this.foodName=foodName;
this.type=type;
this.price=price;
foodArray.push(this);
}

//get main section
const mainSec=document.getElementsByTagName("main");
//create table element
const tableEl=document.createElement("table");
tableEl.id="tableInfo";
mainSec[0].appendChild(tableEl);
document.body.appendChild(mainSec[0]);
//create table content
const th1=document.createElement("th");
const th2=document.createElement("th");
const th3=document.createElement("th");
const th4=document.createElement("th");
const tableRow=document.createElement("tr");
tableEl.appendChild(tableRow);
//apply id attribute for each th and tr
tableRow.id="tr1";
th1.id="th1";
th2.id="th2";
th3.id="th3";
th4.id="th4";
//initialize table elements
th1.textContent="ID";
th2.textContent="Name";
th3.textContent="Type";
th4.textContent="Price";
//show the header bar of tableEl
tableRow.appendChild(th1);
tableRow.appendChild(th2);
tableRow.appendChild(th3);
tableRow.appendChild(th4);

FoodInfo.prototype.renderInfo= function(){
    const tableRow2=document.createElement("tr");
    tableEl.appendChild(tableRow2);
    
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const td4=document.createElement("td");

    td1.textContent=this.id;
    td2.textContent=this.foodName;
    td3.textContent=this.type;
    td4.textContent=this.price;
    
    td1.id="td1";
    td2.id="td2";
    td3.id="td3";
    td4.id="td4";
    
    tableRow2.appendChild(td1);
    tableRow2.appendChild(td2);
    tableRow2.appendChild(td3);
    tableRow2.appendChild(td4);
    document.body.appendChild(mainSec[0]);
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
    f1.renderInfo();
    console.log(f1);
    console.log(foodArray);
}

// function renderFood(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i].renderInfo();
//     }
// }
// renderFood(foodArray);