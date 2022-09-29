// class movie program
class Movie{
    constructor(title,studio,rating)
    {
    this.title=title;
    this.studio=studio;
    this.rating="PG";
}
}
var m1=new Movie("Casino Royale","Eon Productions","PG­13");

// class cieclr program
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
}
getradius()
{
return this.radius;
}

getarea()
{
    return this.radius * PI * this.radius;
}
getcircumferance()
{
    return this.radious * 2 * PI;
}
var c1=new Circle(6,"red");
var c2=new Circle(2,"black")
console.log(c1.getarea());
console.log(c2.getradius());


// class on person details
class Person{
    constructor(fname,lname,age,genter,education,state,country,fullname){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.genter=genter;
        this.education=education;
        this.state=state;
        this.country=country;
        this.fullname=function(){
            return this.fname + " " + this.lname;
        }
    }
}
var person1=new Person("ramesh","kumar",32,"male","MBA","tamilnadu","india");
console.log(person1.fullname());
console.log(person1.genter);

//4.write a class to calculate the uber price.

class Ubercalc{
    constructor(vehiclename,kilometer,rate){
       this.vehiclename=vehiclename;
       this.kilometer=kilometer;
       this.rate=rate;
    }
}
Ubercalc()
{
    return this.kilometer * this.rate;
}
var customer1=new Ubercalc("innova",100,30);
var customer2=new Ubercalc("sailo",150,50);
var customer1=new Ubercalc("tata",50,20);
console.log(customer1.Ubercalc());
console.log(customer2);



request.onload=function(){
    var result = JSON.parse(request.response);
    console.log(result);
}
