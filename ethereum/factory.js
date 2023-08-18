import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x72b0084c24733894188cC330364f13590b9C4C0d'
)

export default instance;