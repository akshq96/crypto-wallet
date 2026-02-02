// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("form").addEventListener('click', handler);
// });
// function handler() {
//     document.getElementById("center").style.display = "flex";

//     const private_key = document.getElementById("private_key").value;
//     const address = document.getElementById("address").value;
//     const amount = document.getElementById("amount").value;

//     test_p = "9a78794e74b5f536545ebc6e7863dc0f41057fccbb6e72c7f18555a960397628";
//     test_a = "0xcfBa64ffA6ca866eF3DEC02871E0D044e447eF82";

//     const provider = new ethers.providers.JsonRpcProvider(
//         "https://eth-sepolia.g.alchemy.com/v2/mbHezZqVqppTthMo7AqOj"
//     );

//     let wallet = new ethers.Wallet(private_key, provider);

//     const tx = {
//         to: address,
//         value: ethers.utils.parseEther(amount)
//     };  
//     var a = document.getElementById("link");
//     a.href = "somelink url";

//     wallet.sendTransaction(tx).then((txObj) => {
//         console.log("txHash", txObj.hash);
//         document.getElementById("center").style.display = "none";
//         const a = document.getElementById("link");
//         a.href = 'https://sepolia.etherscan.io/tx/ ${txObj.hash}';
//         document.getElementById("link").style.display = "block";
//     });
// }
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("check_balance").addEventListener('click', checkbalance);
// });
// function checkbalance() {
//     document.getElementById("center").style.display = "flex";

//     const provider = new ethers.providers.JsonRpcProvider(
//         "https://eth-sepolia.g.alchemy.com/v2/mbHezZqVqppTthMo7AqOj"
//     );

//     const signer = provider.getSigner();

//     console.log(signer);
//     const address = document.getElementById("address").value;
//     provider.getBalance(address).then((balance) => {
//         const balanceInEth = ethers.utils.formatEther(balance);
//         document.getElementById("check_balance").innerText = "Balance: " + balanceInEth + " ETH";
//         console.log("Balance:", balanceInEth, "ETH");
//         document.getElementById("center").style.display = "none";
// });
// }

const transferBtn = document.getElementById("form");
const balanceBtn = document.getElementById("check_balance");
const loader = document.getElementById("center");
const link = document.getElementById("link");

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/mbHezZqVqppTthMo7AqOj"
);

/* ================= TRANSFER ================= */
transferBtn.addEventListener("click", async () => {
  loader.style.display = "flex";
  transferBtn.classList.add("loading");
  transferBtn.classList.remove("success", "error");

  try {
    const wallet = new ethers.Wallet(
      document.getElementById("private_key").value,
      provider
    );

    const tx = {
      to: document.getElementById("address").value,
      value: ethers.utils.parseEther(
        document.getElementById("amount").value
      )
    };

    const txObj = await wallet.sendTransaction(tx);

    transferBtn.classList.remove("loading");
    transferBtn.classList.add("success");

    link.href = `https://sepolia.etherscan.io/tx/${txObj.hash}`;
    link.style.display = "block";

  } catch (err) {
    console.error(err);
    transferBtn.classList.remove("loading");
    transferBtn.classList.add("error");
  } finally {
    loader.style.display = "none";
  }
});

/* ================= CHECK BALANCE ================= */
balanceBtn.addEventListener("click", async () => {
  balanceBtn.classList.add("pulse");
  loader.style.display = "flex";

  try {
    const balance = await provider.getBalance(
      document.getElementById("address").value
    );
    balanceBtn.innerText =
      ethers.utils.formatEther(balance) + " ETH";
  } catch (err) {
    console.error(err);
  } finally {
    loader.style.display = "none";
    setTimeout(() => balanceBtn.classList.remove("pulse"), 1500);
  }
});
