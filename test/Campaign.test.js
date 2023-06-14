const assert = require("assert")
const ganache = require("ganache-cli")
const Web3 = require("web3")
const web3 = new Web3(ganache.provider())

const compiledFactory = require('../ethereum/build/CampaignFactory.json');

const compiledCampaign = require('../ethereum/build/Campaign.json');
const { interfaces } = require("mocha");

let accounts;
let factory; 
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    console.log(compiledFactory.interface);
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call(); // gets first index of the deployed campaign array and stores in the campaignAddress

    // storing the already deployed contract throught its inerface interface and address where the contract is deployed in the network
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress);
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('different user contribution', async ()=>{
        const newContributor = await campaign.methods.contribute().send({
            value: '200',
            from : accounts[1]
        })

        const flag = await campaign.methods.approvers(accounts[1]);
        assert(flag);
    })

    it('check minimum amout to contribute', async()=>{
        try {
            await campaign.methods.contribute().send({
                value:'1',
                from:accounts[0]
            })

            assert(false);
        } catch (error) {
            assert(error);
        }
    })

    it('create a request check', async()=>{
        await campaign.methods.createRequest('Need funds for switches', '300', accounts[1]).send({
            from:accounts[0],
            gas:'1000000'
        });
        const newReq = await campaign.methods.requests(0).call();
        assert('Need funds for switches', newReq.description);
    })

    it('end to end test', async()=>{
        //contribute to the campaign    
        await campaign.methods.contribute().send({
            from: accounts[0],
            value : web3.utils.toWei('10', 'ether')
        })        
        

        //creating a request where the manager requests for 5 ether which will be transfered to reciptant : accounts[1]
        await campaign.methods.createRequest('1', web3.utils.toWei('5', 'ether'), accounts[1]).send({
            from:accounts[0],
            gas:'1000000'
        });

        const request = await campaign.methods.requests(0).call();

        //approve request 
        await campaign.methods.approveRequest(0).send({
            from:accounts[0],
            gas : '1000000'
        })

        //finalize the request
        await campaign.methods.finalizeRequest(0).send({
            from : accounts[0],
            gas : '1000000'
        })
        let balanceInRecieptant = await web3.eth.getBalance(accounts[1]);
        // convert the balance which is in wei to ether and the whole string value to float datatype
        assert(parseFloat(web3.utils.fromWei(balanceInRecieptant, 'ether')) > 104);
    })
});