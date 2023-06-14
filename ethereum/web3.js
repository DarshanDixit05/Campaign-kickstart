import Web3 from "web3";

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser and metamask is running
    web3 = new Web3(window.ethereum);
}
else {
    //we are on server or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://goerli.infura.io/v3/84b2dcc58d894550827534824d3e4d93'
    );
    web3 = new Web3(provider);
}

export default web3;