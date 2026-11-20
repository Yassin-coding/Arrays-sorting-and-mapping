var fruits = ["banana", "jackfruit","pomegrante","avocado","apple"]
document.write(fruits.sort())
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write(fruits.reverse())
var numbers = [67,15,8,10,7,100,34,23,0.5,2.3,-1,3/2]
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write(numbers.sort(function(a,b){return a-b}))
document.write("<br>")
document.write("<br>")
document.write(numbers.sort(function(a,b){return b-a}))
document.body.style.backgroundColor="black"
document.body.style.color="red"