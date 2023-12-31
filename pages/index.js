import React, { Component } from 'react'
import factory from "../ethereum/factory"
import { Card, Button, Responsive } from 'semantic-ui-react'
import Layout from '../components/Layout';
import { Link } from "../routes"

const styles = {
    address: {
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px',
    },
};

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns }
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                key: address,
                header: (<div style={styles.address}>
                    {address}
                </div>),
                description: (
                    <div>
                        <Link route={`/campaigns/${address}`}>
                            <a>View Campaign</a>
                        </Link>
                    </div>),
                fluid: true,
                style: { overflowWrap: 'break-word' }
            }
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Open Campaigns</h3>
                <Link route="/campaigns/new">
                    <a>
                        <Button
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </a>
                </Link>
                {this.renderCampaigns()}
            </Layout>

        )
    }
}

export default CampaignIndex;