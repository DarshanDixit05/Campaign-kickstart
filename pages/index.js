import react , {useEffect, useState} from "react";
import compiledFactory from "../ethereum/factory.js";
import { NextPageContext } from 'next'
 
Page.getInitialProps = async (ctx: NextPageContext) => {
    const campaigns = await compiledFactory.methods.getDeployedCampaigns().call();
    return {campaigns}; 
}


function campaignIndex(props) {
 console.log(props.campaigns);
  return (
    <div>index</div>
  )
}

export default campaignIndex;