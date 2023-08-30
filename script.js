let bill = 0;
let tipPercent = 0;
let people = 0;


let currentPercentButton = '';

const  BILL_INPUT = document.getElementById("billInput");
const TIP_BUTTONS = document.querySelectorAll("#tipGrid button");
const TIP_INPUT = document.querySelector("#tipGrid input");
const PEOPLE_INPUT = document.getElementById("peopleInput");

const RESET_BUTTON = document.getElementById('reset');
const BUTTON_IDS = {5: 'fiveP', 10: 'tenP', 15: 'fifteenP', 25: 'twentyfiveP', 50: 'fiftyP'}

const TIP_AMOUNT = document.getElementById('tipAmounth2');
const TOTAL_AMOUNT = document.getElementById('totalAmounth2')

function setBill(a){
    bill = a;
    updateUI()
}

function setPercent(a){
    tipPercent = a;
    currentPercentButton = BUTTON_IDS[tipPercent];
    updateUI()
}

function setPeople(a){
    people = a;
    updateUI()
}


function updateUI(){
    updatePercentButtonUI();
    updateResetButtonUI();

    if(bill != 0 && tipPercent != 0 && people != 0){
        calculate()
    }
    else{
        TIP_AMOUNT.innerText = '$' + 0.00;
        TOTAL_AMOUNT.innerText = '$' + 0.00;
    }
    
}


function updateResetButtonUI(){   
    if(people != 0 || tipPercent != 0 || bill != 0){
        RESET_BUTTON.disabled = false;
    }
    else{
        RESET_BUTTON.disabled = true;
    }
}

function updatePercentButtonUI(){
    //Tip Percent Buttons

    TIP_BUTTONS.forEach(button => {
        button.classList.remove('clicked')
    })

    if(document.getElementById(currentPercentButton)){
        document.getElementById(currentPercentButton).classList.add('clicked');
    }


}


function reset(){


    PEOPLE_INPUT.value = '';
    BILL_INPUT.value = '';
    TIP_INPUT.value = '';

    bill = 0;
    people = 0;
    tipPercent = 0;
    currentPercentButton = '';


    TIP_BUTTONS.forEach(button => {
        button.classList.remove('clicked')


    updateUI();
    })
}


function calculate(){
    let tip = bill * tipPercent / 100;
    let tipAmout = Math.ceil(tip / people * 100) / 100;
    TIP_AMOUNT.innerText = '$' + tipAmout;

    let total = Number(bill) + Number(tip);
    let totalAmout = Math.ceil(total / people * 100) / 100;
    TOTAL_AMOUNT.innerText = '$' + totalAmout;

}