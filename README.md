# 🔐 Crypto Wallet Browser Extension

A lightweight browser-based crypto wallet extension built to explore how blockchain
transactions and balance queries can be performed directly from a browser extension.

This project focuses on core wallet mechanics such as sending assets, checking balances,
and interacting with blockchain RPC endpoints using a clean popup UI.

---

## ✨ Features

-  Send crypto assets to a wallet address
-  Check wallet balance instantly
-  View transaction details after execution
-  Runs as a browser extension popup
-  Direct blockchain interaction (no external wallet dependency)

---

##  Project Goal

This project was created to understand:

- How wallet logic works behind the scenes
- How browser extensions interact with blockchain networks
- How transactions are constructed, signed, and sent
- How RPC-based communication works in Web3

It is intended for **learning and experimentation**, not production use.

---
## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- ethers.js
- Browser Extension APIs (Manifest V3)

---

## 📂 Project Structure

```txt
crypto-wallet-extension/
│
├── index.html        # Popup UI
├── styles.css        # Styling & animations
├── popup.js          # Wallet logic
├── ether.js          # Blockchain library
├── manifest.json     # Extension configuration
└── README.md
```
---

## ⚙️ Installation

```txt
1)Clone the repository
   git clone https://github.com/your-username/crypto-wallet-extension.git

2)Open your browser and navigate to:
   chrome://extensions/
```
