document.getElementById('calculate-button').addEventListener('click', function(){

            // get income input and convert to numbers
            const incomeInput = document.getElementById('income-input');
            const incomeAmountText = incomeInput.value;
            const incomeAmount = parseFloat(incomeAmountText);

            // clean input field
            incomeInput.value = '';

            // get food, rent & others input
            // food
            const foodInput = document.getElementById('food-input');
            const foodAmountText = foodInput.value;
            const foodAmount = parseFloat(foodAmountText);

            // clean input field
            foodInput.value = '';

            // rent
            const rentInput = document.getElementById('rent-input');
            const rentAmountText = rentInput.value;
            const rentAmount = parseFloat(rentAmountText);

            // clean input field
            rentInput.value = '';

            // other expense field
            const otherInput = document.getElementById('other-input');
            const otherAmountText = otherInput.value;
            const otherAmount = parseFloat(otherAmountText);

            // clean input field
            otherInput.value = '';

            // get the expense field and convert it
            const totalExpense = document.getElementById('total-expense');
            const previousExpenseAmountText = totalExpense.innerText;
            const previousExpenseAmount = parseFloat(previousExpenseAmountText);
            
            const newExpenseAmount =previousExpenseAmount + foodAmount + rentAmount + otherAmount;
            totalExpense.innerText = newExpenseAmount;

            // get balance amount and update 
            const balanceAmount = document.getElementById('balance-amount');
            const previousBalanceText = balanceAmount.innerText;
            const previousBalance = parseFloat(previousBalanceText);

            const newBalance = incomeAmount - newExpenseAmount;
            balanceAmount.innerText = newBalance;
})

