//DAtE => object
let myDate=new Date(2024, 07, 17);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//Time
let myTimeStamp=Date.now();
console.log(myTimeStamp);

console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate= new Date()
console.log(newDate);
console.log((newDate.getMonth())+ 1);
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))


