const expenseInput = document.querySelector('#input-expense');
const amountInput = document.querySelector('#input-amount');
const addBtn = document.querySelector('#btn-add');
const cancelBtn = document.querySelector('#btn-cancel');
const expenseList = document.querySelector('#expense-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

const clear = () =>{
    expenseInput.value = '';
    amountInput.value = '';
}

let totalExpenses = 0;

addBtn.addEventListener('click', () => {
    enteredExpenseName = expenseInput.value;
    eneteredAmount = amountInput.value;

    //validating
    if(enteredExpenseName.trim().length <= 0 || eneteredAmount <= 0 || eneteredAmount.trim().length <= 0){
        alertCtrl.create({
            message : 'Invalid expense name or amount',
            header: 'Invalid Inputs',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        })
        return;
    }
    
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredExpenseName + ': Tshs. ' + eneteredAmount;
    expenseList.appendChild(newItem);
    
    totalExpenses += +eneteredAmount;
    totalExpensesOutput.textContent = totalExpenses;

    clear();
});

cancelBtn.addEventListener('click', () => {
    clear();
});