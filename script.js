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
    let balance = 5000;
    let transactionCount = 0;
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

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${transactionCount}</td>
            <td>${type}</td>
            <td>$${amount.toFixed(2)}</td>
            <td>$${balance.toFixed(2)}</td>
        `;
        historyTable.appendChild(newRow);
    }

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
