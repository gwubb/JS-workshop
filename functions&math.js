// To get prompt working in node js I had to install prompt-sync.
// You can install prompt-sync with the command "npm install prompt-sync"
const prompt = require("prompt-sync")();

// this function caluclates the volume of a cube
// gets called later on in program to substitute the math in the program
function cubeVol(e) {
    var vs
    vs = e**3
    return vs
}

function cylVol(r,h) {
    var vc
    vc = 3.1415*(r**2)*h
    return vc
}

function triVol(a,b,c,h) {
    var fh = (1/4)*h
    var af = -1*(a**4)
    var ab = (a*b)**2
    var ac = (a*c)**2
    var bc = (b*c)**2
    var tv = fh * Math.sqrt(af+(2*ab)+(2*ac)-(b**4)+(2*bc)-(c**4))
    return tv
}
//declaring variables for the functions
var cuVol, cyVol, trVol

//Tells you to enter numbers
var el = prompt("Enter side length of a cube: ")
cuVol = cubeVol(el)

var tA = prompt("Enter side a of the triangular prism: ")
var tB = prompt("Enter side b: ")
var tC = prompt("Enter side c: ")
var tH = prompt("Enter the height of the triangular prism: ")
trVol = triVol(tA, tB, tC, tH)

var rad = prompt("Enter radius of a cylinder: ")
var height = prompt("Enter height of a cylinder: ")
cyVol = cylVol(rad, height)

//outputs the answers to the calculations
console.log("The volume of the cube is " + cuVol)
console.log("The volume of the triangular prism is " + trVol)
console.log("The volume of the cylinder is "+ cyVol)

/*
This was an descently interesting project to do since I am very new to programming at the time of writing this.
This wasn't too hard since I just used my barely funcitonal basic knowledge from C++ and applied it here.
It also helps that I already wrote this exact program in C++ which saved a lot of time since I only needed to figure out
what I needed to write and less of how to even approach this problem.
*/