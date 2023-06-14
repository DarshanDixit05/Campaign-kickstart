import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0x85bBFFaB2C4ef8BD0BdE1029F483CF871f54FeE9');

export default instance;