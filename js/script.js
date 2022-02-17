// get all input and parseFloat and clean the input 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clean the input value 
    inputField.value = '';
    return amountValue;
};



// get calculate button and handle click event 
document.getElementById('calculate-button').addEventListener('click', function(){
            
            // all input calls to function
            const incomeAmount = getInputValue('income-input');
            const  foodAmount = getInputValue('food-input');
            const rentAmount = getInputValue('rent-input');
            const otherAmount = getInputValue('other-input');


            // get the expense field and float it
            const totalExpense = document.getElementById('total-expense');
           const previousExpenseAmountText = totalExpense.innerText;
            const previousExpenseAmount = parseFloat(previousExpenseAmountText); 


            // get balance amount and update 
            const balanceAmount = document.getElementById('balance-amount');
            const previousBalanceText = balanceAmount.innerText;
            const previousBalance = parseFloat(previousBalanceText);

            // get negative error field 
            const negativeError = document.getElementById('negative-error');
            // get expense Error field 
            const expenseError = document.getElementById('expense-error');

            // conditions
            if(incomeAmount, foodAmount , rentAmount, otherAmount >0){
                   
            const newExpenseAmount = previousExpenseAmount + foodAmount + rentAmount + otherAmount;
            totalExpense.innerText = newExpenseAmount; 
                
            // expense condition 
            if(newExpenseAmount <= incomeAmount){
                const newBalance = incomeAmount - newExpenseAmount;
                balanceAmount.innerText = newBalance;
             }
             else{
                expenseError.style.display = 'block';
             }
        }
        else {
            negativeError.style.display = 'block'
            } 

                // update balance amount 
             /* const newBalance = incomeAmount - newExpenseAmount;
             balanceAmount.innerText = newBalance; } */


             
             /* if(newExpenseAmount <= incomeAmount){
                const newBalance = incomeAmount - newExpenseAmount;
                balanceAmount.innerText = newBalance;
             }
             else{
                expenseError.style.display = 'block';
             } */

            /* else {
                negativeError.style.display = 'block'
            }  */
            
           /*  // get expense error 
            const expenseError = document.getElementById('expense-error');
            if(newBalance > incomeAmount){
                const newBalance = incomeAmount - newExpenseAmount;
                balanceAmount.innerText = newBalance; 
            }
            else{
                expenseError.style.display = 'block';
            } */

            
                 
});


// savings calculation 
document.getElementById('save-button').addEventListener('click', function(){
    // get balace total and convert to number
    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceText = balanceAmount.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    // const previousBalance = 
    
    // get saving input amount and call to the function
    const savingInputAmount = getInputValue('saving-input');

    // get saving amount and float
    const savings = document.getElementById('saving-amount');
    const savingAmountText = savings.innerText;
    const savingAmount = parseFloat(savingAmountText);

    // get remaining balance and float it
    const remainings = document.getElementById('remaining-balance');
    const remainingBalanceText = remainings.innerText;
    const remainingBalance = parseFloat(remainingBalanceText);

    // get saving error 
    const savingsError = document.getElementById('savings-error');

    if(savingInputAmount > 0){
        const newSavings = previousBalance / savingInputAmount;
        savings.innerText = newSavings;

          // remainings
    const newRemainings = previousBalance - newSavings;
    remainings.innerText = newRemainings;
    }
    else{
        savingsError.style.display = 'block';
    }
    
});

