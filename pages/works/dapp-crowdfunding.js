import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="reactmap">
    <Container>
      <Title>
        dApp Crowdfunding <Badge>2022</Badge>
      </Title>
      <P>
      A decentralized crowdfunding app (also known as a web3 crowdfunding app) is a DApp that enables users to participate in crowdfunding campaigns using cryptocurrency or other digital assets. This can include campaigns to fund creative projects, startups, or other ventures.
      </P>
      <P>
      One advantage of using a decentralized app for crowdfunding is that it allows for a more transparent and secure process, as the transactions are recorded on a public blockchain and cannot be easily altered or manipulated. This can help to build trust with potential donors and investors
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="dapp-crowdfunding-client.vercel.app">
          dapp-crowdfunding-client.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Tailwind, React, Vite, Thirdweb</span>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/aindrajaya/dapp-crowdfunding-client">
            DApp Crowdfunding <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dappcrowdfunding2.gif" alt="react-map"/>
      <WorkImage src="/images/works/dappcrowdfunding.jpg" alt="react-map"/>
    </Container>
  </Layout>
)

export default Work;
