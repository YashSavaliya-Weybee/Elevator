let id1 = null;
let id2 = null;
let id3 = null;
let oldTop1 = 424;
let oldTop2 = 424;
let oldTop3 = 424;

const elevator1 = document.getElementById('elevator1');
const elevator2 = document.getElementById('elevator2');
const elevator3 = document.getElementById('elevator3');
const buttons = document.getElementsByTagName('button');

const allEle = [{
    id: 1,
    Top: 424,
    isRunning: false,
    isOff: false
}, {
    id: 2,
    Top: 424,
    isRunning: false,
    isOff: false
}, {
    id: 3,
    Top: 424,
    isRunning: false,
    isOff: false
}];

for (let i of buttons) {
    i.addEventListener("click", function () {
        floreReqs = i.getAttribute('id')[0];
        chooseElevator(floreReqs);
    })
}

function chooseElevator(floreReqs) {
    switch (floreReqs) {
        case '1':
            if (elevator1.style.top != '424px' && elevator2.style.top != '424px' && elevator3.style.top != '424px') {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(424 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
        case '2':
            if (elevator1.style.top != '318px' && elevator2.style.top != '318px' && elevator3.style.top != '318px') {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(318 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
        case '3':
            if (elevator1.style.top != '212px' && elevator2.style.top != '212px' && elevator3.style.top != '212px') {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(212 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
        case '4':
            if (elevator1.style.top != '106px' && elevator2.style.top != '106px' && elevator3.style.top != '106px') {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(106 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
        case '5':
            if (elevator1.style.top != '0px' && elevator2.style.top != '0px' && elevator3.style.top != '0px') {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(0 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
    }
}

function allindex(minDis, distOfAllEle) {
    let occuranceOfMinInd = [0, 0, 0];
    for (let i = 0; i < distOfAllEle.length; i++) {
        if (minDis == distOfAllEle[i]) {
            occuranceOfMinInd[i] = 1;
        }
    }

    if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[1] == 1 && occuranceOfMinInd[2] == 1) {
        let randEle = Math.trunc(Math.random() * occuranceOfMinInd.length + 1);
        randEle == 1 ? (allEle[0].isRunning ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator1, oldTop1)) :
            randEle == 2 ? (allEle[1].isRunning ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator2, oldTop2)) :
                (ele3isTravallEle[2].isRunningeling ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator3, oldTop3))
    } else {
        if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[1] == 1) {
            let randEle = Math.trunc(Math.random() * 2 + 1);
            randEle == 1 ? (allEle[0].isRunning ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator1, oldTop1)) :
                (allEle[1].isRunning ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator2, oldTop2));
        } else if (occuranceOfMinInd[1] == 1 && occuranceOfMinInd[2] == 1) {
            let randEle = Math.trunc(Math.random() * 2 + 1);
            randEle == 1 ? (allEle[1].isRunning ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator2, oldTop2)) :
                (allEle[2].isRunning ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator3, oldTop3));
        } else if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[2] == 1) {
            let randEle = Math.trunc(Math.random() * 2 + 1);
            randEle == 1 ? (allEle[0].isRunning ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator1, oldTop1)) :
                (allEle[2].isRunning ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator3, oldTop3));
        } else {
            occuranceOfMinInd[0] == 1 ? (allEle[0].isRunning ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator1, oldTop1)) :
                occuranceOfMinInd[1] == 1 ? (allEle[1].isRunning ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator2, oldTop2)) :
                    (allEle[2].isRunning ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator3, oldTop3))
        }
    }
}

function travelElevator(floreReqs, ele, oldtop) {
    switch (floreReqs) {
        case '1':
            eleMove(424, ele, oldtop);
            break;
        case '2':
            eleMove(318, ele, oldtop);
            break;
        case '3':
            eleMove(212, ele, oldtop);
            break;
        case '4':
            eleMove(106, ele, oldtop);
            break;
        case '5':
            eleMove(0, ele, oldtop);
            break;
    }
}

function eleMove(top, eleNo, oldtop) {
    const ele = eleNo.getAttribute('id');
    if (ele == 'elevator1') {
        if (!allEle[0].isOff) {
            if (!allEle[0].isRunning) {
                allEle[0].isRunning = true;
                allEle[0].Top = top;
                if (oldtop < top) {
                    clearInterval(id1);
                    id1 = setInterval(frame, 0);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id1);
                            allEle[0].isRunning = false;
                            elevator1.classList.contains('eleoff') ? allEle[0].isOff = true : allEle[0].isOff = false;
                        } else {
                            oldtop++;
                            eleNo.style.top = oldtop + 'px';
                            floreNumber(eleNo);
                            oldTop1 = top;
                        }
                    }
                } else if (oldtop > top) {
                    clearInterval(id1);
                    id1 = setInterval(frame, 0);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id1);
                            allEle[0].isRunning = false;
                            elevator1.classList.contains('eleoff') ? allEle[0].isOff = true : allEle[0].isOff = false;
                        } else {
                            oldtop--;
                            eleNo.style.top = oldtop + 'px';
                            floreNumber(eleNo);
                            oldTop1 = top;
                        }
                    }
                }
            }
        }
    } else if (ele == 'elevator2') {
        if (!allEle[1].isOff) {
            if (allEle[1].isRunning == false) {
                allEle[1].isRunning = true;
                allEle[1].Top = top;
                if (oldtop < top) {
                    clearInterval(id2);
                    id2 = setInterval(frame, 0);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id2);
                            allEle[1].isRunning = false;
                            elevator2.classList.contains('eleoff') ? allEle[1].isOff = true : allEle[1].isOff = false;
                        } else {
                            oldtop++;
                            eleNo.style.top = oldtop + 'px';
                            floreNumber(eleNo);
                            oldTop2 = top;
                        }
                    }
                } else if (oldtop > top) {
                    clearInterval(id2);
                    id2 = setInterval(frame, 0);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id2);
                            allEle[1].isRunning = false;
                            elevator2.classList.contains('eleoff') ? allEle[1].isRunning = true : allEle[1].isRunning = false;
                        } else {
                            oldtop--;
                            eleNo.style.top = oldtop + 'px';
                            floreNumber(eleNo);
                            oldTop2 = top;
                        }
                    }
                }
            }
        }
    } else if (ele == 'elevator3') {
        if (!allEle[2].isOff) {
            if (allEle[2].isRunning == false) {
                allEle[2].isRunning = true;
                allEle[2].Top = top;
                if (oldtop < top) {
                    clearInterval(id3);
                    id3 = setInterval(frame, -100);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id3);
                            allEle[2].isRunning = false;
                            elevator3.classList.contains('eleoff') ? allEle[2].isOff = true : allEle[2].isOff = false;
                        } else {
                            oldtop++;
                            eleNo.style.top = oldtop + 'px';
                            floreNumber(eleNo);
                            oldTop3 = top;
                        }
                    }
                } else if (oldtop > top) {
                    clearInterval(id3);
                    id3 = setInterval(frame, -100);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id3);
                            allEle[2].isRunning = false;
                            elevator3.classList.contains('eleoff') ? allEle[2].isOff = true : allEle[2].isOff = false;
                        } else {
                            oldtop--;
                            eleNo.style.top = oldtop + 'px';
                            floreNumber(eleNo);
                            oldTop3 = top;
                        }
                    }
                }
            }
        }
    }
}

function floreNumber(ele) {
    ele.style.top == '0px' ? ele.textContent = 5 :
        ele.style.top == '106px' ? ele.textContent = 4 :
            ele.style.top == '212px' ? ele.textContent = 3 :
                ele.style.top == '318px' ? ele.textContent = 2 :
                    ele.style.top == '424px' ? ele.textContent = 1 : console.log('')
}





// // oprateBtn.forEach(ele => {
// //     ele.addEventListener("click", function (e) {
// //         e.preventDefault();
// //         console.log("id", ele.id);
// //         const element = compareLocation(ele.id.slice(1));
// //         moveElevator(ele.id.slice(1), element);
// //     })
// // });

// function compareLocation(flore) {
//     const newTop = (oldTop - (80 * (flore - 1)));

//     const moveleep = [];
//     dataArr.forEach(ele => {
//         const topNew = ele.toper.split("").slice(0, -2).join("");
//         const difference = Math.abs(newTop - (+topNew));
//         moveleep.push(difference);
//     });

//     let minimum = Math.min(...moveleep);

//     const index = moveleep.indexOf(minimum);

//     // const elementOf = dataArr[index].element;

//     dataArr[index].isRunnig = true;
//     return dataArr[index].element;


// }

// function moveElevator(flore, elevator) {
//     const newTop = (oldTop - (80 * (flore - 1))) + 'px';
//     const newEle = dataArr.find(ele => ele.element == elevator);
//     // const newElement = newEle.element;
//     newEle.element.style.top = newTop;
//     newEle.toper = newTop;
//     newEle.element.style.transition = "all 1s linear";

//     let count = 0;
//     lip.forEach(ele => {
//         if (ele.children[0].style.top == newTop) {
//             count = 1;
//         }
//     });

//     if (count == 0) {
//         for (let i = 1; i <= answer; i++) {
//             if (flore == i) {
//                 elevator.style.top = newTop;
//                 elevator.style.transition = 'all 0.5s linear';
//                 break;
//             }
//         }
//     }

// }