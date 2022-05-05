import React, {ReactNode, ReactElement} from 'react';
import {ServiceCard} from '../../components/cards';
import Layout from '../../components/layout';
import {Title2, Body2} from '../../utils/typography';
import Link from 'next/link';

export default function ServicesPage(): ReactNode {

    return (
        <>
            <Title2>Services</Title2>
            <Body2 margin="30px 0">Here you can see services where your Verifiable Credentials may be utilized. As SSI adoption grows, you will see here not only complex crypto services, but also representatives of traditional areas (banks, medical centers, entertainment services, online schools, ticket providers, etc.).</Body2>
            <Link href="/services/flatqube">
                <a>
                    <ServiceCard disabled={false} title="FlatQube" description="Exchange tokens at better rates. Get special offers in TON.Swap liquidity pools Exchange tokens at better." img="/assets/flatqube.png"/>
                </a>
            </Link>
            <ServiceCard disabled={true} title="Octus Bridge" description="The Octus Bridge is a сross-chain asset transfer consisting of a link between 5 blockchains: BSC, ETH, Everscale, Fantom, Polygon." img="/assets/octus-bridge.png"/>
            <ServiceCard disabled={true} title="Grandbazar.io" description="First NFT marketplace with a supporting of TrueNFT technology based on Everscale blockchain." img="/assets/grandbazar.png"/>
            <ServiceCard disabled={true} title="HSBC" description="One of the top banks in Europe. Apply for a loan with Verifiable Credentials and enjoy fast scoring decision." img="/assets/hsbc.png"/>
        </>
    );
}

ServicesPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
