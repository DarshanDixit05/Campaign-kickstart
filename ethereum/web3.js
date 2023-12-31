import Web3 from "web3";

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser and metamask is running
    web3 = new Web3(window.ethereum);
}
else {
    //we are on server or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://goerli.infura.io/v3/e2b861bb8cb944ba83297b18fa1e9153'
    );
    web3 = new Web3(provider);
}

export default web3;