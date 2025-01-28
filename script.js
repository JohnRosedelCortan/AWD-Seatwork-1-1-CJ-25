<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cortan Transactions</title>
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to bottom right, #038eff, #038eff);
            color: #333;
        }

        header {
            background: white;
            color: #0f2c7a;
            padding: 20px 0;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .navbar {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }

        .navbar a {
            text-decoration: none;
            color: #038eff;
            font-size: 1.1em;
            margin: 0 15px;
            transition: color 0.3s;
        }

        .navbar a:hover {
            color: #0f2c7a; /* Change the hover color for better visibility */
        }

        .hero {
            text-align: center;
            padding: 100px 20px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 15px;
            margin: 50px auto;
            max-width: 800px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .hero h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #038eff;
        }

        .hero p {
            font-size: 1.2em;
            margin-bottom: 30px;
            color: #666;
        }

        .hero button {
            padding: 12px 25px;
            font-size: 1.1em;
            background-color: #038eff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }

        .hero button:hover {
            background-color: #0f2c7a; /* Darker hover color */
            transform: scale(1.05);
        }

        .demo-container {
            max-width: 800px;
            margin: 50px auto;
            background: white;
            color: #333;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            display: none; 
        }

        .demo-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .demo-header h1 {
            color: #038eff;
            font-size: 2.2em;
        }

        .balance {
            text-align: center;
            font-size: 1.5em;
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #038eff;
            border-radius: 10px;
            background: #f8f8f8;
            color: #038eff;
        }

        .transaction-form {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 20px;
        }

        .transaction-form input {
            flex: 1;
            padding: 10px;
            font-size: 1em;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .transaction-form button {
            padding: 10px 20px;
            background: #038eff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }

        .transaction-form button:hover {
            background-color: #0f2c7a; /* Darker hover color */
            transform: scale(1.05);
        }

        .history {
            margin-top: 20px;
        }

        .history h2 {
            text-align: center;
            color: #038eff;
            font-size: 1.8em;
        }

        .history table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .history table,
        .history th,
        .history td {
            border: 1px solid #ddd;
        }

        .history th,
        .history td {
            padding: 12px;
            text-align: center;
        }

        .history th {
            background: #038eff;
            color: white;
        }

        footer {
            background: #038eff;
            color: white;
            text-align: center;
            padding: 20px 0;
            margin-top: 50px;
        }

        footer p {
            margin: 0;
            font-size: 0.9em;
        }
    </style>
</head>

<body>
    <header>
        <div class="navbar">
            <a href="#home">Home</a>
            <a href="#demo">Demo</a>
        </div>
    </header>

    <section id="home" class="hero">
        <h1>Welcome to Cortan Transactions</h1>
        <p>Secure, Simple, and Effective Financial Management.</p>
        <button>Try the Demo</button>
    </section>

    <div id="demo" class="demo-container">
        <div class="demo-header">
            <h1>Cortan Transactions Demo</h1>
            <p>Manage your account balance with secure and real-time updates.</p>
        </div>

        <div class="balance">
            Current Balance: $<span id="balance">5000</span>
        </div>

        <div class="transaction-form">
            <input type="number" id="amount" placeholder="Enter amount" min="1">
            <button id="deposit">Deposit</button>
            <button id="withdraw">Withdraw</button>
        </div>

        <div class="history">
            <h2>Transaction History</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody id="transaction-history">
                    <!-- Transaction history will be populated here -->
                </tbody>
            </table>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 Cortan Transactions. All rights reserved.</p>
    </footer>
</body>

</html>
