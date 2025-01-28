const balanceElement = document.getElementById('balance');
const historyElement = document.getElementById('history');
const amountInput = document.getElementById('amount');
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');

let balance = 5000;
let transactionHistory = [];

const updateUI = () => {
  balanceElement.textContent = balance.toFixed(2);
  historyElement.innerHTML = transactionHistory
    .map((tx, index) => `<li>${index + 1}. ${tx.type}: ₱${tx.amount.toFixed(2)} (${tx.date})</li>`)
    .join('');
};

const addTransaction = (type, amount) => {
  if (amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  if (type === 'Withdraw' && amount > balance) {
    alert('Insufficient balance.');
    return;
  }

  balance += type === 'Deposit' ? amount : -amount;
  const date = new Date().toLocaleString();
  transactionHistory.unshift({ type, amount, date });
  updateUI();
};

depositButton.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount)) addTransaction('Deposit', amount);
  amountInput.value = '';
});

withdrawButton.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount)) addTransaction('Withdraw', amount);
  amountInput.value = '';
});

// Initialize the UI
updateUI();
