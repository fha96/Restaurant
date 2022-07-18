'use strict';


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



    function getData(){
        let retrievData=localStorage.getItem("Food");
        // console.log(retrievData);
        // console.log(typeof retrievData); //string
        // convert the string data to array 
        let parseData =JSON.parse(retrievData);
        // console.log(parseData);
        // console.log(typeof parseData);

        //declare 2 arrays to use it inside a Pie-Chart
        let fruitCounter=[];
        let starchyCounter=[];
        let dairyCounter=[];
        let proteinCounter=[];
        let fatCounter=[];

        //do re-instantiation
        if(parseData != null){
        for(let i=0;i<parseData.length;i++){
        ////////////////////////////////////////////////////////////////
        //calculate the number of type food
        switch (parseData[i].type){
            case "Fruit and Vegetables":
                fruitCounter.push(parseData[i].type);
                break;
            case "Strachy Food":
                starchyCounter.push(parseData[i].type);
                break;
            case "Dairy":
                dairyCounter.push(parseData[i].type);
                break;
            case "Protein":
                proteinCounter.push(parseData[i].type);
                break;
            case "Fat":
                fatCounter.push(parseData[i].type);
                break;

        }
        



        const tableRow2=document.createElement("tr");
        tableRow2.id="tr2";
        tableEl.appendChild(tableRow2);

        const td1=document.createElement("td");
        const td2=document.createElement("td");
        const td3=document.createElement("td");
        const td4=document.createElement("td");

        td1.textContent=parseData[i].id;
        td2.textContent=parseData[i].foodName;
        td3.textContent=parseData[i].type;
        td4.textContent=parseData[i].price +" JD ";

        td1.id="td1";
        td2.id="td2";
        td3.id="td3";
        td4.id="td4";

        tableRow2.appendChild(td1);
        tableRow2.appendChild(td2);
        tableRow2.appendChild(td3);
        tableRow2.appendChild(td4);
        document.body.appendChild(mainSec[0]);
        chartData(fatCounter.length,starchyCounter.length,dairyCounter.length,proteinCounter.length,fatCounter.length);

    }
}
    }
    getData();
   
    function chartData(fruit,starchy,dairy,protein,fat){

   
            // line chart data
            // pie chart data
            var pieData = [
                {
                    value: fruit,
                    color:"red"
                },
                {
                    value : starchy,
                    color : "yellow"
                },
                {
                    value : dairy,
                    color : "blue"
                },
                {
                    value : protein,
                    color : "green"
                },
                {
                    value : fat,
                    color : "black"
                }
            ];
            // pie chart options
            var pieOptions = {
                 segmentShowStroke : false,
                 animateScale : true
            }
            // get pie chart canvas
            var countries= document.getElementById("countries").getContext("2d");
            // draw pie chart
            new Chart(countries).Pie(pieData, pieOptions);
            // bar chart data
            var barData = {
                labels : ["Fruit and Vegetables","Strachy Food","Dairy","Protein","Fat"],
                datasets : [
                    {
                        fillColor : "red",
                        strokeColor : "black",
                        data : [fruit,starchy,dairy,protein,fat]
                    }
                ]
            }
            // get bar chart canvas
            var income = document.getElementById("income").getContext("2d");
            // draw bar chart
            new Chart(income).Bar(barData);
        }
