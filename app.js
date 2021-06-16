// Objects

// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "100", quantity: "2" }
// ]

// var juice = itemsArray[0].price * itemsArray[0].quantity
// document.write("Juice ==>" + " " + juice + "<br>")

// var cookie = itemsArray[1].price * itemsArray[1].quantity
// document.write("Cookie ==>" + " " + cookie + "<br>")

// var shirt = itemsArray[2].price * itemsArray[2].quantity
// document.write("Shirt ==>" + " " + shirt + "<br>")

// var pen = itemsArray[3].price * itemsArray[3].quantity
// document.write("Pen ==>" + " " + pen + "<br>")

// var total = juice + cookie + shirt + pen;
// document.write("Total Price ==>" + " " + total + "<br>")

// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.

// var obj = {
//     name : "Talha",
//     email : "mtajig05@gmail.com",
//     password : "123456",
//     gender : "male",
//     city : "karachi",
//     country : "Pakistan"
// }

// var age = obj.hasOwnProperty("age");
// console.log(age)

// var country = obj.hasOwnProperty("country");
// console.log(country)

// console.log("firstName" in obj);

// console.log("lastName" in obj);

// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

// function Practice(name,roll_no,depart){
//     this.name = name;
//     this.roll_no = roll_no;
//     this.depart = depart;
// }

// var record1 = new Practice("Talha",37,"Textile");
// console.log(record1)

// var record2 = new Practice("Kashif",65,"Mechanical");
// console.log(record2)

// var record3 = new Practice("Amaan",70,"Electircal");
// console.log(record3)

// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.

function Population(name,gender,address,education,profession){
this.name = name;
this.gender = gender;
this.address = address;
this.education = education;
this.profession = profession
}

var house1 = new Population("Talha","male","house no.1","Bachelors","Textile engineer");
var house2 = new Population("Saad","male","house no.2","BBA","Marketing Manager");
var house3 = new Population("Nirwan","male","house no.3","ACCA","Accountant");
var house4 = new Population("Arsal","male","house no.4","O levels","Student")

var edu_save1 = localStorage.setItem("education",house1.education)
console.log(localStorage.getItem("education"))

var edu_save2 = localStorage.setItem("education2",house2.education)
console.log(localStorage.getItem("education2"))

var edu_save3 = localStorage.setItem("education3",house3.education)
console.log(localStorage.getItem("education3"))

var edu_save4 = localStorage.setItem("education4",house4.education)
console.log(localStorage.getItem("education4"))

var para1 = document.getElementById("para1");

// function details(){
//     var box = document.createElement("input");
//     box.setAttribute("type","checkbox");
//     var text = document.createTextNode(localStorage.getItem("education"));
//     box.append(text);
//     para1.appendChild(box)


// }