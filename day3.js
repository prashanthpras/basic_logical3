//21.Sum of Natural Numbers Using Recursion

// function sum(num){
//     if(num>0){
//         return num + sum(num-1);
//     }else {
//         return num;
//     }
// }
// const number=parseInt(prompt("enter the +ve integer"))
// const result=sum(number)
// console.log(`the sum is ${result}`)

//22.Program to Guess a Number

// function guessNumber(){
// const random=Math.floor(Math.random()*10)+1
// let number=parseInt(prompt("guess a number 1 to 10"))
// while(number!==random){
//     number=(prompt("guess a number 1 to 10"))
// }
// if(number==random){
//     console.log("you guessed the number coorectly")
// }
// }
// guessNumber()

//23.Shuffle Deck of Cards

// let suits=["spades","diamond","club","heart"]
// let values=["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
// let deck=[]

// for(let i=0;i<suits.length;i++){
//     for(let x=0;x<values.length;x++){
//         let cards={Value:values[x],Suit:suits[i]}
//         deck.push(cards)
//     }
// }
// console.log(deck)

//24.a.program to check if the string is palindrome or not

// function checkPalindrome(string){
// let len=string.length;
// for(let i=0;i<len/2;i++)
// {
//     if(string[i]!==string[len-1-i])
//     {
//         return console.log("It is not a palindrome")
//     }
// }
// return console.log("It is a palindrome")
// }
// let string=prompt("enter the string")
// console.log(string)
// checkPalindrome(string)

//24.b.Check Palindrome using built-in Functions

// function checkPalindrome(string)
// {
// let arrayValue=string.split("")
// let reverseVale=arrayValue.reverse()
// let newString=reverseVale.join("")
// if(newString==string){
//     console.log("it is a palindrome")
// }else{
//     console.log("it is not a palindrome")
// }
// }
// let string=prompt("enter the string")
// console.log(string)
// checkPalindrome(string)

//25.a.ASCII Value of Character Using charCodeAt()

// let string=prompt("enter the string")
// let result=string.charCodeAt(0)
// console.log(result)

//15.b.ASCII Value of Character Using codePointAt()

// let string=prompt("enter the string")
// let result=string.codePointAt(0)
// console.log(result)
 
//26. Sort Words in Alphabetical Order

// const string=prompt("enter the sentence")
// const words=string.split(" ")
// words.sort()
// console.log("the words are:")
// for(const element of words){
//     console.log(element)
// }

//27.a. Replace First Occurrence of a Character in a String

// let string="the sky is blue,water is blue"
// let newWord=string.replace("blue","red")
// console.log(newWord)

//27.b.2: Replace Character of a String Using RegEx

// let string="the sky is blue,water is blue,and I like a Blue Dragon"
// let regex= /blue/g;
// let newWord=string.replace(regex,"red")
// console.log(newWord)

//28.a.Reverse a String Using for Loop

// function reverseString(string){
//  let newString=""
//  for(let i=string.length-1;i>=0;i--)
//  {
//    newString+=string[i]
//  }
//  return newString
// }
// let string=prompt("enter the stgring")
// console.log(reverseString(string))

//28.b.Reverse a String Using built-in Methods

// function reverseString(string){
//     let splitString=string.split("")
//     let reverseString=splitString.reverse()
//     let joinString=reverseString.join("")
//       return joinString
// }
// let string=prompt("enter the string")
// let value=reverseString(string)
// console.log(value)

//29.JavaScript Program to Create Objects in Different Ways
//29.a.Using object literal

// const person={
//     name:"prashanth",
//     age:24,
//     hobbies:["gaming","reading"],
//     greet:function(){
//         console.log("hello")
//     },

// }

// console.log(typeof person)
// console.log(person.name)
// console.log(person.hobbies[1])
// console.log(person.age)
// console.log(person.greet())


//29.b. Create an Object using constructor function

// function Person(){
// this.name="prashanth",
// this.age=24,
// this.hobbies=["gaming","reading"],
// this.greet=function(){
//              console.log("hello")
//          }
// }
// const person=new Person()
// console.log(typeof person)
// console.log(person.name)
// console.log(person.hobbies[1])
// console.log(person.age)
// console.log(person.greet())


//29.c.Create an Object using class 

// class Person{
//      constructor(name,age){
//         this.name=name;
//         this.age=age;
//      }

//      displayDetails(){
//         console.log(`Name:${this.name} 
//         Age:${this.age}`)
//      }
// }

// let p1=new Person("prashanth",23);
// p1.displayDetails();

//30.JavaScript Program to Check the Number of Occurrences of a Character in the String

// function countString(str,letter){
// let count=0;
// for(let i=0;i<str.length;i++)
// {
//     if(str.charAt(i)==letter)
//     {
//         count+=1
//     }
// }
// return count;

// }
// let str=prompt("enter the string")
// let letter=prompt("enter the letter")
// let result=countString(str,letter)
// console.log(result)





