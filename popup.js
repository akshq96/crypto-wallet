document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form").addEventListener("click", sendTx);
    document.getElementById("check_balance").addEventListener("click", checkBalance);
  });
  
  const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/mbHezZqVqppTthMo7AqOj";
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL, {
  name: "sepolia",
  chainId: 11155111
  });

  
  async function sendTx() {
    const loader = document.getElementById("center");
    const link = document.getElementById("link");
  
    try {
      loader.style.display = "flex";
      link.style.display = "none";
  
      let privateKey = document.getElementById("private_key").value.trim();
      const to = document.getElementById("address").value.trim();
      const amount = document.getElementById("amount").value.trim();
  
      if (privateKey.startsWith("0x")) privateKey = privateKey.slice(2);
      if (privateKey.length !== 64) throw new Error("Invalid private key");
      if (!ethers.utils.isAddress(to)) throw new Error("Invalid address");
  
      const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
      const wallet = new ethers.Wallet(privateKey, provider);
  
      const balance = await provider.getBalance(wallet.address);
      if (balance.eq(0)) throw new Error("Wallet has 0 Sepolia ETH");
  
      const tx = await wallet.sendTransaction({
        to,
        value: ethers.utils.parseEther(amount)
      });
  
      await tx.wait();
  
      loader.style.display = "none";
      link.href = `https://sepolia.etherscan.io/tx/${tx.hash}`;
      link.innerText = "View on Etherscan";
      link.style.display = "block";
  
    } catch (err) {
      loader.style.display = "none";
      alert(err.message);
      console.error(err);
    }
  }
  
  async function checkBalance() {
    try {
      const address = document.getElementById("address").value.trim();
      if (!ethers.utils.isAddress(address)) throw new Error("Invalid address");
  
      const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
      const balance = await provider.getBalance(address);
      const eth = ethers.utils.formatEther(balance);
  
      document.getElementById("check_balance").innerText = `Balance: ${eth} ETH`;
    } catch (err) {
      alert(err.message);
    }
  }
  