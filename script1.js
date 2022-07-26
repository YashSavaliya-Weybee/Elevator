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
let floreReqs;

const allEle = [{
    id: 1,
    Top: 424,
    oldTop: 424,
    isRunning: false,
    isOff: false
}, {
    id: 2,
    Top: 424,
    oldTop: 424,
    isRunning: false,
    isOff: false
}, {
    id: 3,
    Top: 424,
    oldTop: 424,
    isRunning: false,
    isOff: false
}];

for (let i of buttons) {
    i.addEventListener("click", function () {
        floreReqs = i.getAttribute('id')[0];
        chooseElevator(floreReqs);
    })
}

function offElevator(el) {
    el.classList.toggle('onbtn');
    const id = el.getAttribute('id');
    switch (id[id.length - 1]) {
        case '1':
            elevator1.classList.contains('eleoff') ? elevator1.classList.remove('eleoff') : elevator1.classList.add('eleoff');
            eleMove(424, elevator1, oldTop1);
            elevator1.classList.contains('eleoff') ? allEle[0].isRunning = true : allEle[0].isRunning = false;
            elevator1.classList.contains('eleoff') ? allEle[0].isOff = true : allEle[0].isOff = false;
            elevator1.classList.contains('eleoff') ? allEle[0].Top = 425 : allEle[0].Top = 424;
            break;
        case '2':
            elevator2.classList.contains('eleoff') ? elevator2.classList.remove('eleoff') : elevator2.classList.add('eleoff');
            eleMove(424, elevator2, oldTop2);
            elevator2.classList.contains('eleoff') ? allEle[1].isRunning = true : allEle[1].isRunning = false;
            elevator2.classList.contains('eleoff') ? allEle[1].isOff = true : allEle[1].isOff = false;
            elevator2.classList.contains('eleoff') ? allEle[1].Top = 425 : allEle[1].Top = 424;
            break;
        case '3':
            elevator3.classList.contains('eleoff') ? elevator3.classList.remove('eleoff') : elevator3.classList.add('eleoff');
            eleMove(424, elevator3, oldTop3);
            elevator3.classList.contains('eleoff') ? allEle[2].isRunning = true : allEle[2].isRunning = false;
            elevator3.classList.contains('eleoff') ? allEle[2].isOff = true : allEle[2].isOff = false;
            elevator3.classList.contains('eleoff') ? allEle[2].Top = 425 : allEle[2].Top = 424;
            break;
    }
}

function chooseElevator(floreReqs) {
    switch (floreReqs) {
        case '1':
            if (allEle[0].Top != 424 && allEle[1].Top != 424 && allEle[2].Top != 424) {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(424 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
        case '2':
            if (allEle[0].Top != 318 && allEle[1].Top != 318 && allEle[2].Top != 318) {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(318 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
        case '3':
            if (allEle[0].Top != 212 && allEle[1].Top != 212 && allEle[2].Top != 212) {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(212 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
        case '4':
            if (allEle[0].Top != 106 && allEle[1].Top != 106 && allEle[2].Top != 106) {
                const distOfAllEle = [];
                allEle.forEach(ele => {
                    distOfAllEle.push(Math.abs(106 - ele.Top));
                });
                let minDis = Math.min(...distOfAllEle);
                allindex(minDis, distOfAllEle);
            }
            break;
        case '5':
            if (allEle[0].Top != 0 && allEle[1].Top != 0 && allEle[2].Top != 0) {
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
    debugger
    let occuranceOfMinInd = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        if (minDis == distOfAllEle[i]) {
            occuranceOfMinInd[i] = 1;
        }
    }

    if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[1] == 1 && occuranceOfMinInd[2] == 1) {
        if (!allEle[0].isRunning && !allEle[1].isRunning && !allEle[2].isRunning) {
            let randEle = Math.trunc(Math.random() * 3 + 1);
            randEle == 1 ? travelElevator(floreReqs, elevator1, oldTop1) : randEle == 2 ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator3, oldTop3);
        } else {
            nearestEle(...distOfAllEle)
        }
    } else {
        if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[1] == 1) {
            if (allEle[0].isRunning && allEle[1].isRunning) {
                travelElevator(floreReqs, elevator3, oldTop3)
            } else {
                let randEle = Math.trunc(Math.random() * 2 + 1);
                randEle == 1 ? (allEle[0].isRunning ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator1, oldTop1)) :
                    (allEle[1].isRunning ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator2, oldTop2));
            }
        } else if (occuranceOfMinInd[1] == 1 && occuranceOfMinInd[2] == 1) {
            if (allEle[1].isRunning && allEle[2].isRunning) {
                travelElevator(floreReqs, elevator1, oldTop1)
            } else {
                let randEle = Math.trunc(Math.random() * 2 + 1);
                randEle == 1 ? (allEle[1].isRunning ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator2, oldTop2)) :
                    (allEle[2].isRunning ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator3, oldTop3));
            }
        } else if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[2] == 1) {
            if (allEle[0].isRunning && allEle[2].isRunning) {
                travelElevator(floreReqs, elevator2, oldTop2)
            } else {
                let randEle = Math.trunc(Math.random() * 2 + 1);
                randEle == 1 ? (allEle[0].isRunning ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator1, oldTop1)) :
                    (allEle[2].isRunning ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator3, oldTop3));
            }
        } else {
            occuranceOfMinInd[0] == 1 ? (allEle[0].isRunning ? nearestEle(distOfAllEle.slice(1, 3)) : travelElevator(floreReqs, elevator1, oldTop1)) :
                occuranceOfMinInd[1] == 1 ? (allEle[1].isRunning ? nearestEle([distOfAllEle[0], distOfAllEle[2]]) : travelElevator(floreReqs, elevator2, oldTop2)) :
                    (allEle[2].isRunning ? nearestEle(distOfAllEle.slice(0, 2)) : travelElevator(floreReqs, elevator3, oldTop3))
        }
    }
}

function nearestEle(...distOfAllEle) {
    let minDisIndex = distOfAllEle.indexOf(Math.min(...distOfAllEle));
    if (allEle[0].isRunning && allEle[1].isRunning) {
        travelElevator(floreReqs, elevator3, oldTop3);
    } else if (allEle[1].isRunning && allEle[2].isRunning) {
        travelElevator(floreReqs, elevator1, oldTop1);
    } else if (allEle[0].isRunning && allEle[2].isRunning) {
        travelElevator(floreReqs, elevator2, oldTop2);
    } else {
        if (allEle[0].isRunning) {
            minDisIndex == 0 ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator3, oldTop3);
        } else if (allEle[1].isRunning) {
            minDisIndex == 0 ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator3, oldTop3);
        } else if (allEle[2].isRunning) {
            minDisIndex == 0 ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator2, oldTop2);
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
                if (oldtop <= top) {
                    clearInterval(id1);
                    id1 = setInterval(frame, 0);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id1);
                            allEle[0].isRunning = false;
                            elevator1.classList.contains('eleoff') ? allEle[0].isOff = true : allEle[0].isOff = false;
                            elevator1.classList.contains('eleoff') ? allEle[0].isRunning = true : allEle[0].isRunning = false;
                            elevator1.classList.contains('eleoff') ? allEle[0].Top = 425 : undefined;
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
                            elevator1.classList.contains('eleoff') ? allEle[0].isRunning = true : allEle[0].isRunning = false;
                            elevator1.classList.contains('eleoff') ? allEle[0].Top = 425 : undefined;
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
                if (oldtop <= top) {
                    clearInterval(id2);
                    id2 = setInterval(frame, 0);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id2);
                            allEle[1].isRunning = false;
                            elevator2.classList.contains('eleoff') ? allEle[1].isOff = true : allEle[1].isOff = false;
                            elevator2.classList.contains('eleoff') ? allEle[1].isRunning = true : allEle[1].isRunning = false;
                            elevator2.classList.contains('eleoff') ? allEle[1].Top = 425 : undefined;
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
                            elevator2.classList.contains('eleoff') ? allEle[1].isRunning = true : allEle[1].isRunning = false;
                            elevator2.classList.contains('eleoff') ? allEle[1].Top = 425 : undefined;
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
                if (oldtop <= top) {
                    clearInterval(id3);
                    id3 = setInterval(frame, -100);
                    function frame() {
                        if (oldtop == top) {
                            clearInterval(id3);
                            allEle[2].isRunning = false;
                            elevator3.classList.contains('eleoff') ? allEle[2].isOff = true : allEle[2].isOff = false;
                            elevator3.classList.contains('eleoff') ? allEle[2].isRunning = true : allEle[2].isRunning = false;
                            elevator3.classList.contains('eleoff') ? allEle[2].Top = 425 : undefined;
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
                            elevator3.classList.contains('eleoff') ? allEle[2].isRunning = true : allEle[2].isRunning = false;
                            elevator3.classList.contains('eleoff') ? allEle[2].Top = 425 : undefined;
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
                    ele.style.top == '424px' ? ele.textContent = 1 : console.log();
}