//Objects literals
const sym= Symbol("key1")
const JSuser = {
    name:"pragya",
    age:19,
    [sym]/*syntax to declare a symbol in an object */:"mykey1",
    "email":"pragya@google.com",//cant be accessed through . operator
    location:"delhi"
}
// console.log(JSuser.name);
// console.log(JSuser["email"]);
// console.log(JSuser[sym]);
// Object.freeze(JSuser);
// JSuser["email"]="pragya@chatgpt.com";
// console.log(JSuser);

JSuser["greetings"]= function(){
    console.log(`hello JS user,${this.name} !!`);//this: it used to refer the object itself
    
}
console.log(JSuser.greetings());



