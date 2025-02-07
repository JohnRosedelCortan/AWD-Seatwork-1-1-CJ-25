function showHome() {
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.demo-container').style.display = 'none';
}

function showDemo() {
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.demo-container').style.display = 'block';
    initDemo();
}

function initDemo() {
    let balance = parseFloat(localStorage.getItem("balance")) || 5000;
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    let transactionCount = transactions.length;
    const balanceElement = document.getElementById("balance");
    const historyTable = document.getElementById("transaction-history");

    function updateBalance(amount, type) {
        transactionCount++;

        if (type === "Deposit") {
            balance += amount;
        } else if (type === "Withdraw") {
            if (amount > balance) {
                alert("Insufficient funds!");
                return;
            }
            balance -= amount;
        }

        balanceElement.textContent = balance;
        localStorage.setItem("balance", balance);

        const transaction = { id: transactionCount, type, amount, balance };
        transactions.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(transactions));

        addTransactionToHistory(transaction);
    }

    function addTransactionToHistory(transaction) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.type}</td>
            <td>$${transaction.amount.toFixed(2)}</td>
            <td>$${transaction.balance.toFixed(2)}</td>
        `;
        historyTable.appendChild(newRow);
    }

    function loadTransactionHistory() {
        historyTable.innerHTML = ""; 
        transactions.forEach(addTransactionToHistory);
    }

    balanceElement.textContent = balance;
    loadTransactionHistory();

    document.getElementById("deposit").addEventListener("click", () => {
        const amount = parseFloat(document.getElementById("amount").value);
        if (!amount || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        updateBalance(amount, "Deposit");
        document.getElementById("amount").value = "";
    });

    document.getElementById("withdraw").addEventListener("click", () => {
        const amount = parseFloat(document.getElementById("amount").value);
        if (!amount || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        updateBalance(amount, "Withdraw");
        document.getElementById("amount").value = "";
    });

    console.log("Demo loaded successfully.");
}

showHome();
