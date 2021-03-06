var Web3 = require("web3");

export const mintNft = async (price, tokenAmount, address) => {

    if (window.web3) {
        var web3 = window.web3;

        const AvaWar = require("./AvaWar.json");
        const add = web3.utils.toChecksumAddress(process.env.REACT_APP_ADDRESS);
        const contract = new web3.eth.Contract(AvaWar.abi, add);
        let e;
        try {
            var correctPrice = web3.utils.toBN(
                web3.utils.toWei(price, "ether").toString()
            );
        } catch (u) {
            console.log('err', u);
        }
        try {
            e = await contract.methods.mint(tokenAmount).estimateGas({
                value: correctPrice * tokenAmount,
                from: address
            })
        } catch (u) {
            console.log('error', u)
        }
        let d = await web3.eth.getGasPrice();
        let c;

        try {
            c = await contract.methods.mint(tokenAmount).send({
                from: address,
                gas: parseInt(e),
                gasPrice: parseInt(1.2 * d),
                value: correctPrice * tokenAmount,
                maxFeePerGas: null,
            })
        } catch (u) {
            console.log('send error', u);
        }

        if (c) {
            return c.status;
        }
    }
}