let TAge = document.querySelector('.treeAmount')
let TAPerSec = document.querySelector('.TApers')

let leafAmount = document.querySelector('.leafAmount')
let leafPerSec = document.querySelector('.leafpers')

var tickspeed = 1000

var TreeAge = 0
var TreeAgeGain = 0
var TreeAgeBase = 1
var TreeAgeMulti = 1

var leavesAmount = 0
var leavesGain = 0
var leavesBase = 0
var leavesMulti = 1

var LUpgrade = 0

var leavesClickMulti = 1



let L1Up = document.querySelector('.L1Up')
let L2Up = document.querySelector('.L2Up')

var L1PriceScaling = 1.5
var L1BoughtAmount = 0
var L2PriceScaling = 2.125
var L2BoughtAmount = 0
var L3PriceScaling = 4.5875
var L3BoughtAmount = 0



setInterval(() => {
    TreeAgeGain = (TreeAgeBase * TreeAgeMulti)
    TreeAge += TreeAgeGain
    TAPerSec.innerHTML = parseFloat(TreeAgeGain)
    TAge.innerHTML = parseFloat(TreeAge)



    leavesGain = (leavesBase * leavesMulti)
    leavesAmount += leavesGain

    leafPerSec.innerHTML = parseFloat(leavesGain)
    leafAmount.innerHTML = parseFloat(leavesAmount)
    console.log("leaves: ",leavesAmount);
    
}, tickspeed);

function LClick() {
    leavesAmount += leavesClickMulti
    leafAmount.innerHTML = parseFloat(leavesAmount)
}

function L1() {
    if (leavesAmount >= Math.round(10 * (L1PriceScaling ** L1BoughtAmount))) {
        leavesAmount -= Math.round(10 * (L1PriceScaling ** L1BoughtAmount))
        L1BoughtAmount += 1
        L1Up.innerHTML = parseFloat(Math.round(10 * (L1PriceScaling ** L1BoughtAmount)))
        leavesBase += 1
    }
}

function L2() {
    if (leavesAmount >= Math.round(250 * (L2PriceScaling ** L2BoughtAmount))) {
        leavesAmount -= Math.round(250 * (L2PriceScaling ** L2BoughtAmount))
        L2BoughtAmount += 1
        L2Up.innerHTML = parseFloat(Math.round(250 * (L2PriceScaling ** L2BoughtAmount)))
        leavesMulti += 1
    }
}