
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    console.log(result);

//1.Get all the countries from the Asia continent /region using the Filter function
var result1=result.filter((ele)=>ele.region=="Asia").map((ele)=>ele.name);
console.log(result1);

//2.Get all the countries with a population of less than 2 lakhs using Filter function
var popu=result.filter((ele)=>ele.population>200000).map((ele)=>ele.name);
console.log(popu);

//3.Print the following details name, capital, flag using forEach function

result.forEach((element)=>console.log(element.name));
result.forEach((element)=>console.log(element.capital));
result.forEach((element)=>console.log(element.flag));

//4.Print the total population of countries using reduce function

var totalpop=result.reduce((acc,cv)=>acc+cv.population,0);
console.log(totalpop);

//5.Print the country which uses US Dollars as currency.
var dollar=result.filter((ele)=>ele.currencies.name==="United States Dollar").map((ele)=>ele.name);
console.log(dollar);
}