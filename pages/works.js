import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/gridItem";
import Section from "../components/section";
import Layout from "../components/layouts/article";
// import penaThumb from "../../public/images/pena.png";

//Images
const artopThum = "https://res.cloudinary.com/colbycloud-apps/image/upload/f_avif/q_auto/v1/imagecarbon/ehpgy8yhqx1ij9xsfqis?_a=AVAEwDV0"
const reactMapThumb = "https://res.cloudinary.com/colbycloud-apps/image/upload/f_avif/q_auto/v1/imagecarbon/xnhzggpy8kmwuzyv54d0?_a=AVAEwDV0"
const chainxMpaThumb = "/images/works/chainx1.png"
const nftMemberThumb = "/images/works/arto-member1.png"
const dappCrowdfundingThumb = "https://res.cloudinary.com/colbycloud-apps/image/upload/f_avif/q_auto/v1/imagecarbon/qsdxln6pb9zhissexazm?_a=AVAEwDV0"
const penaThumb = "/images/works/pena.png"

const Works = () => {
  return(
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={6}>
          Works
        </Heading>
        <Divider />
        <Heading as="h4" fontSize={16} mt={2} mb={4}>
          Collaboration Works
        </Heading>
        {/* With Delay 0.1 */}
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem id="pena" title="Pena" thumbnail={penaThumb}>
            Penateam.com is a platform that offers technical documentation services, such as API & SDK Documentation, Internal Documentation and many more.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="artopologi" title="Artopologi" thumbnail={artopThum}>
            Artopologi.com is a website that offers art-related content and services, such as artist profiles, art collections, and auctions.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider />
        <Heading as="h4" fontSize={16} mt={2} mb={4}>
          Personal Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem id="chainx" title="ChainX" thumbnail={chainxMpaThumb}>
              The ChainX Smart Contract Security Scanner is a robust and user-friendly tool designed to help developers identify vulnerabilities in their Solidity smart contracts before deployment.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="arto-member" title="NFT Memberships" thumbnail={nftMemberThumb}>
              This project focuses on Web3 implementation for NFT Memberships to provide exclusive access to artist events, behind-the-scenes content, and special discounts.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="react-map" title="React Map" thumbnail={reactMapThumb}>
              This project enhancing ReactJS GIS implementation using Leaflet. This project has a tool for visualizing and analyzing spatial data.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="dapp-crowdfunding" title="Dapp Crowdfunding" thumbnail={dappCrowdfundingThumb}>
              A decentralized crowdfunding app (also known as a web3 crowdfunding app) is a DApp that enables users to participate in crowdfunding campaigns using cryptocurrency or other digital assets.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider />
        <Heading as="h4" fontSize={16} mt={2} mb={4}>
          Non-profit Works
        </Heading>
        {/* With Delay 0.2 */}
      </Container>
    </Layout>
  )
}

export default Works