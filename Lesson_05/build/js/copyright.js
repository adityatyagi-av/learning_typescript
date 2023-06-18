"use strict";
// const year =document.getElementById("year")!
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime",thisYear)
// year.textContent=thisYear
//1st Variation in the code 
// let year:HTMLElement|null =document.getElementById("year")!
// let thisYear:string = new Date().getFullYear().toString();
// console.log(thisYear)
// if(year){
//     year.setAttribute("datetime",thisYear)
//     year.textContent=thisYear
// }
//2nd Variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
