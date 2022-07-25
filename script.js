let id1 = null;
let id2 = null;
let id3 = null;
let oldTop1 = 424;
let oldTop2 = 424;
let oldTop3 = 424;
let ele1isTraveling = false;
let ele2isTraveling = false;
let ele3isTraveling = false;

const elevator1 = document.getElementById('elevator1');
const elevator2 = document.getElementById('elevator2');
const elevator3 = document.getElementById('elevator3');
const buttons = document.getElementsByTagName('button');

let floreReqs;

for (let i of buttons) {
    i.addEventListener("click", function () {
        floreReqs = i.getAttribute('id')[0];
        chooseElevator(floreReqs)
    })
}

function offElevator(el) {
    el.classList.toggle('onbtn');
    const id = el.getAttribute('id');
    switch (id[id.length - 1]) {
        case '1':
            elevator1.classList.contains('eleoff') ? elevator1.classList.remove('eleoff') : elevator1.classList.add('eleoff');
            eleMove(424, elevator1, oldTop1);
            !ele1isTraveling ? ele1isTraveling = true : ele1isTraveling = false;
            break;
        case '2':
            elevator2.classList.contains('eleoff') ? elevator2.classList.remove('eleoff') : elevator2.classList.add('eleoff');
            eleMove(424, elevator2, oldTop2);
            !ele2isTraveling ? ele2isTraveling = true : ele2isTraveling = false;
            break;
        case '3':
            elevator3.classList.contains('eleoff') ? elevator3.classList.remove('eleoff') : elevator3.classList.add('eleoff');
            eleMove(424, elevator3, oldTop3);
            !ele3isTraveling ? ele3isTraveling = true : ele3isTraveling = false;
            break;
    }
}

function chooseElevator(floreReqs) {
    switch (floreReqs) {
        case '1':
            if (elevator1.style.top != '424px' && elevator2.style.top != '424px' && elevator3.style.top != '424px') {
                let distansEle = [Math.abs(424 - oldTop1), Math.abs(424 - oldTop2), Math.abs(424 - oldTop3)]
                let minDis = Math.min(...distansEle);
                allindex(minDis, distansEle)
            }
            break;
        case '2':
            if (elevator1.style.top != '318px' && elevator2.style.top != '318px' && elevator3.style.top != '318px') {
                let distansEle = [Math.abs(318 - oldTop1), Math.abs(318 - oldTop2), Math.abs(318 - oldTop3)]
                let minDis = Math.min(...distansEle);
                allindex(minDis, distansEle)
            }
            break;
        case '3':
            if (elevator1.style.top != '212px' && elevator2.style.top != '212px' && elevator3.style.top != '212px') {
                let distansEle = [Math.abs(212 - oldTop1), Math.abs(212 - oldTop2), Math.abs(212 - oldTop3)]
                let minDis = Math.min(...distansEle);
                allindex(minDis, distansEle)
            }
            break;
        case '4':
            if (elevator1.style.top != '106px' && elevator2.style.top != '106px' && elevator3.style.top != '106px') {
                let distansEle = [Math.abs(106 - oldTop1), Math.abs(106 - oldTop2), Math.abs(106 - oldTop3)]
                let minDis = Math.min(...distansEle);
                allindex(minDis, distansEle)
            }
            break;
        case '5':
            if (elevator1.style.top != '0px' && elevator2.style.top != '0px' && elevator3.style.top != '0px') {
                let distansEle = [Math.abs(0 - oldTop1), Math.abs(0 - oldTop2), Math.abs(0 - oldTop3)]
                let minDis = Math.min(...distansEle);
                allindex(minDis, distansEle)
            }
            break;
    }
}

function allindex(minDis, distansEle) {
    let occuranceOfMinInd = [0, 0, 0];
    for (let i = 0; i < distansEle.length; i++) {
        if (minDis == distansEle[i]) {
            occuranceOfMinInd[i] = 1;
        }
    }

    if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[1] == 1 && occuranceOfMinInd[2] == 1) {
        let randEle = Math.trunc(Math.random() * occuranceOfMinInd.length + 1);
        randEle == 1 ? (ele1isTraveling ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator1, oldTop1)) :
            randEle == 2 ? (ele2isTraveling ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator2, oldTop2)) :
                (ele3isTraveling ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator3, oldTop3))
    } else {
        if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[1] == 1) {
            let randEle = Math.trunc(Math.random() * 2 + 1);
            randEle == 1 ? (ele1isTraveling ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator1, oldTop1)) :
                (ele2isTraveling ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator2, oldTop2));
        } else if (occuranceOfMinInd[1] == 1 && occuranceOfMinInd[2] == 1) {
            let randEle = Math.trunc(Math.random() * 2 + 1);
            randEle == 1 ? (ele2isTraveling ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator2, oldTop2)) :
                (ele3isTraveling ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator3, oldTop3));
        } else if (occuranceOfMinInd[0] == 1 && occuranceOfMinInd[2] == 1) {
            let randEle = Math.trunc(Math.random() * 2 + 1);
            randEle == 1 ? (ele1isTraveling ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator1, oldTop1)) :
                (ele3isTraveling ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator3, oldTop3));
        } else {
            occuranceOfMinInd[0] == 1 ? (ele1isTraveling ? travelElevator(floreReqs, elevator2, oldTop2) : travelElevator(floreReqs, elevator1, oldTop1)) :
                occuranceOfMinInd[1] == 1 ? (ele2isTraveling ? travelElevator(floreReqs, elevator3, oldTop3) : travelElevator(floreReqs, elevator2, oldTop2)) :
                    (ele3isTraveling ? travelElevator(floreReqs, elevator1, oldTop1) : travelElevator(floreReqs, elevator3, oldTop3))
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
        if (ele1isTraveling == false) {
            ele1isTraveling = true;
            if (oldtop < top) {
                clearInterval(id1);
                id1 = setInterval(frame, 0);
                function frame() {
                    if (oldtop == top) {
                        clearInterval(id1);
                        elevator1.classList.contains('eleoff') ? ele1isTraveling = true : ele1isTraveling = false;
                    } else {
                        oldtop++;
                        eleNo.style.top = oldtop + 'px';
                        floreNumber(eleNo);
                        updateOldTop(ele, top);
                    }
                }
            } else if (oldtop > top) {
                clearInterval(id1);
                id1 = setInterval(frame, 0);
                function frame() {
                    if (oldtop == top) {
                        clearInterval(id1);
                        elevator1.classList.contains('eleoff') ? ele1isTraveling = true : ele1isTraveling = false;
                    } else {
                        oldtop--;
                        eleNo.style.top = oldtop + 'px';
                        floreNumber(eleNo);
                        updateOldTop(ele, top);
                    }
                }
            }
        }
    } else if (ele == 'elevator2') {
        if (ele2isTraveling == false) {
            ele2isTraveling = true;
            if (oldtop < top) {
                clearInterval(id2);
                id2 = setInterval(frame, 0);
                function frame() {
                    if (oldtop == top) {
                        clearInterval(id2);
                        elevator2.classList.contains('eleoff') ? ele2isTraveling = true : ele2isTraveling = false;
                    } else {
                        oldtop++;
                        eleNo.style.top = oldtop + 'px';
                        floreNumber(eleNo);
                        updateOldTop(ele, top);
                    }
                }
            } else if (oldtop > top) {
                clearInterval(id2);
                id2 = setInterval(frame, 0);
                function frame() {
                    if (oldtop == top) {
                        clearInterval(id2);
                        elevator2.classList.contains('eleoff') ? ele2isTraveling = true : ele2isTraveling = false;
                    } else {
                        oldtop--;
                        eleNo.style.top = oldtop + 'px';
                        floreNumber(eleNo);
                        updateOldTop(ele, top);
                    }
                }
            }
        }
    } else if (ele == 'elevator3') {
        if (ele3isTraveling == false) {
            ele3isTraveling = true;
            if (oldtop < top) {
                clearInterval(id3);
                id3 = setInterval(frame, -100);
                function frame() {
                    if (oldtop == top) {
                        clearInterval(id3);
                        elevator3.classList.contains('eleoff') ? ele3isTraveling = true : ele3isTraveling = false;
                    } else {
                        oldtop++;
                        eleNo.style.top = oldtop + 'px';
                        floreNumber(eleNo);
                        updateOldTop(ele, top);
                    }
                }
            } else if (oldtop > top) {
                clearInterval(id3);
                id3 = setInterval(frame, -100);
                function frame() {
                    if (oldtop == top) {
                        clearInterval(id3);
                        elevator3.classList.contains('eleoff') ? ele3isTraveling = true : ele3isTraveling = false;
                    } else {
                        oldtop--;
                        eleNo.style.top = oldtop + 'px';
                        floreNumber(eleNo);
                        updateOldTop(ele, top);
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

function updateOldTop(ele, oT) {
    if (ele == 'elevator1') {
        oldTop1 = oT;
    } else if (ele == 'elevator2') {
        oldTop2 = oT;
    } else if (ele == 'elevator3') {
        oldTop3 = oT;
    }
}