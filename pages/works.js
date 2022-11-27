import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/gridItem";
import Section from "../components/section";

//Images
import reactMapThumb from "../public/images/works/reactmap.jpg";
import dappCrowdfundingThumb from "../public/images/works/dappcrowdfunding.jpg"

const Works = () => {
  return(
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="react-map" title="React Map" thumbnail={reactMapThumb}>
            This project enhancing ReactJS GIS implementation using Leaflet. This project has a tool for visualizing and analyzing spatial data.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="dapp-crowdfunding" title="Dapp Crowdfunding" thumbnail={dappCrowdfundingThumb}>
          A decentralized crowdfunding app (also known as a web3 crowdfunding app) is a DApp that enables users to participate in crowdfunding campaigns using cryptocurrency or other digital assets.
          </WorkGridItem>
        </Section>

        {/* With Delay 0.1 */}

        {/* With Delay 0.2 */}
      </SimpleGrid>
    </Container>
  )
}

export default Works