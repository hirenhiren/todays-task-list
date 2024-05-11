let firstCheckBox = document.getElementById('taskOneCheckBoxId');
let firstField = document.getElementById('firstTaskField');
let secondCheckBox = document.getElementById('taskTwoCheckBoxId');
let secondField = document.getElementById('secondTaskField');
let thirdCheckBox = document.getElementById('taskThreeCheckBoxId');
let thirdField = document.getElementById('thirdTaskField');
let progressColor = document.getElementById('simpeprog');

console.log(progressColor);

function getInputValueFunction(){

    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0
    if(firstCheckBox.checked){
        firstField.style.color = '#48A300';
        firstCount = 1;
    }
    else{
        firstField.style.color = '#000';
        firstCount = 0;
    }
    if(secondCheckBox.checked){
        secondField.style.color = '#48A300';
        secondCount = 1;
    }
    else{
        secondField.style.color = '#000';
        secondCount = 0;
    }
    if(thirdCheckBox.checked){
        thirdField.style.color = '#48A300';
        thirdCount = 1;
    }
    else{
        thirdField.style.color = '#000';
        thirdCount = 0;
    }

    let totalCount = firstCount + secondCount + thirdCount;
    console.log(totalCount);

    if (totalCount === 1) {
        progressColor.style.width = '33%';
    } else if (totalCount === 2) {
        progressColor.style.width = '66%';
    } else if (totalCount === 3) {
        progressColor.style.width = '100%';
    }
    else if(totalCount === 0){
        progressColor.style.width = '0%';
    }
}
