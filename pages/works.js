import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/gridItem";
import Section from "../components/section";
import Layout from "../components/layouts/article";
// import penaThumb from "../../public/images/pena.png";

//Images
const artopThum = "https://res.cloudinary.com/colbycloud-apps/image/upload/f_avif/q_auto/v1/imagecarbon/ehpgy8yhqx1ij9xsfqis?_a=AVAEwDV0"
const reactMapThumb = "https://res.cloudinary.com/colbycloud-apps/image/upload/f_avif/q_auto/v1/imagecarbon/xnhzggpy8kmwuzyv54d0?_a=AVAEwDV0"
const chainxMpaThumb = "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/5e523eb3332175b7932b122a7154b1af?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQgd5s1tzXn3cAKfjrVvddkP6DINVXMcC2SqS/nQ6tRgIgKM7K6odAF7YH9%2BVZ7rx/Z/Rv%2BUOvUcmS%2BC7iDotNbwUq1gQIm///////////ARAAGgw3Mzk5MzkxNzM4MTkiDMB4HU2aMGhiJNS0pCqqBLEYXLhfbMS9VQ1lxCiuPWTcmCgoHYvoYdMM0y6/wcQV1H%2BhLG2zkiIKmINpnIG4UfmDvYiUKB%2BNG4VnlkpVftQJjX%2BvFdHiJoHTT2/cdlXjthUEn7E/p/Ciy27VD030ZUrYIqBngTTCDhlnvqhmApZwGEf6a07Hi7RO3du4MimI9USBcJPje3aURKU6yJyYXvBD/X5sp/oD8QmUvPrXqd1ak925F%2BNqlVLLnetgy6erCldez48AFdkjVpgilm7r0Mo7WR7GmXZO5nomnAQvqLLD06t/0nFjlk9oMrgLmjzxkT/yoteA83KdiOzP2GSgkqQG1oi%2BQcxy4OmB2hZC5U413XMlHjwFBQOYns42ERKoktDymEuN25XUhcDuT6l8%2BNFq%2BPsrGgNr0uZZYSCvJRG/yc0f9cOAG58bF99PVCsOyRp1KB6kLyM5Zw4qM0FmA47V0aDaEtO0UHcqVK6ZGOLcl0xcftACC2FkcrUigv0K7HDEq3%2B9qMn/eXX1ItwAXUXa4D4JPPr6P3p661VcRIN1AAtdUoGKrtmEIOJ15NY0BgDX4WFEcBTNegoD9OQv9ASKv3ZxVXP8Eafpz0hFjvxLy/aWLfacDrJMFJKRg0h5fpU0DFlLV7oyxVbkRMuGwg4Kzj9Y%2Bx66G/ozJ5M28qD%2BbqhNx5HdNVMZZuhs9Eh%2B9UM12L6WMga8X8sgpDxhJy5qye8eM3rrXnDBm3SnkIh%2BXzWyt0nUpQYxMLat%2BrkGOqcB9Oi53auovpcqKP43D1zqZYuQJJRC3pdjvrqMaVpu40qLymZb%2BcjmsRLNii5dkRJsLZ%2BX4gy2eRwN0euqgRKZxfyEgRsa5ifcMtrKPx2vNNVx9wvw0fkUIFrapQjF2eq42iTQS4NdFJcJvSCW6ZLvCHHAol/7A5WZPe%2BIz0%2B9RphET1m5mh1swF7qEkyO2tbqB3gakFpJf4nth4114oE/E/6/VX4cj4Q=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241121T022041Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW572WX7J33/20241121/us-west-2/s3/aws4_request&X-Amz-Signature=28fef6a0950ac95b3754b00e9747c1e9f74dd63196cda7ecd0887674a80f904f"
const nftMemberThumb = "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/5501be7c679db76beb241bd863f004fc?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQgd5s1tzXn3cAKfjrVvddkP6DINVXMcC2SqS/nQ6tRgIgKM7K6odAF7YH9%2BVZ7rx/Z/Rv%2BUOvUcmS%2BC7iDotNbwUq1gQIm///////////ARAAGgw3Mzk5MzkxNzM4MTkiDMB4HU2aMGhiJNS0pCqqBLEYXLhfbMS9VQ1lxCiuPWTcmCgoHYvoYdMM0y6/wcQV1H%2BhLG2zkiIKmINpnIG4UfmDvYiUKB%2BNG4VnlkpVftQJjX%2BvFdHiJoHTT2/cdlXjthUEn7E/p/Ciy27VD030ZUrYIqBngTTCDhlnvqhmApZwGEf6a07Hi7RO3du4MimI9USBcJPje3aURKU6yJyYXvBD/X5sp/oD8QmUvPrXqd1ak925F%2BNqlVLLnetgy6erCldez48AFdkjVpgilm7r0Mo7WR7GmXZO5nomnAQvqLLD06t/0nFjlk9oMrgLmjzxkT/yoteA83KdiOzP2GSgkqQG1oi%2BQcxy4OmB2hZC5U413XMlHjwFBQOYns42ERKoktDymEuN25XUhcDuT6l8%2BNFq%2BPsrGgNr0uZZYSCvJRG/yc0f9cOAG58bF99PVCsOyRp1KB6kLyM5Zw4qM0FmA47V0aDaEtO0UHcqVK6ZGOLcl0xcftACC2FkcrUigv0K7HDEq3%2B9qMn/eXX1ItwAXUXa4D4JPPr6P3p661VcRIN1AAtdUoGKrtmEIOJ15NY0BgDX4WFEcBTNegoD9OQv9ASKv3ZxVXP8Eafpz0hFjvxLy/aWLfacDrJMFJKRg0h5fpU0DFlLV7oyxVbkRMuGwg4Kzj9Y%2Bx66G/ozJ5M28qD%2BbqhNx5HdNVMZZuhs9Eh%2B9UM12L6WMga8X8sgpDxhJy5qye8eM3rrXnDBm3SnkIh%2BXzWyt0nUpQYxMLat%2BrkGOqcB9Oi53auovpcqKP43D1zqZYuQJJRC3pdjvrqMaVpu40qLymZb%2BcjmsRLNii5dkRJsLZ%2BX4gy2eRwN0euqgRKZxfyEgRsa5ifcMtrKPx2vNNVx9wvw0fkUIFrapQjF2eq42iTQS4NdFJcJvSCW6ZLvCHHAol/7A5WZPe%2BIz0%2B9RphET1m5mh1swF7qEkyO2tbqB3gakFpJf4nth4114oE/E/6/VX4cj4Q=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241121T023242Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=ASIA2YR6PYW572WX7J33/20241121/us-west-2/s3/aws4_request&X-Amz-Signature=2a43599019245ad758732a38987cb4274ebd8226b1286f6c680f8035bbf9b91c"
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