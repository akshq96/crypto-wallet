document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("form").addEventListener('click', handler);
});
function handler() {
    document.getElementById("center").style.display = "flex";

    const private_key = document.getElementById("private_key").value;
    const address = document.getElementById("address").value;
    const amount = document.getElementById("amount").value;

    test_p = "9a78794e74b5f536545ebc6e7863dc0f41057fccbb6e72c7f18555a960397628";
    test_a = "0xcfBa64ffA6ca866eF3DEC02871E0D044e447eF82";

    const provider = new ethers.providers.JsonRpcProvider(
        "https://rpc.ankr.com/eth_goerli"
    );