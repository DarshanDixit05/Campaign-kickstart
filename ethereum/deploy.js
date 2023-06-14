const HDWalletProvider = require("truffle-hdwallet-provider")
const Web3 = require('web3')
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
    "boss tumble network vacant siren battle ladder urge sure style claw police",
    "https://goerli.infura.io/v3/84b2dcc58d894550827534824d3e4d93"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Trying to deploy from", accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] })
    
    console.log(compiledFactory.interface);
    console.log("contract deployed to", result.options.address)  //address : 0x85bBFFaB2C4ef8BD0BdE1029F483CF871f54FeE9

    //interface : 
    // [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDeployedCampaigns","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"minimum","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
    provider.engine.stop();
};
deploy();