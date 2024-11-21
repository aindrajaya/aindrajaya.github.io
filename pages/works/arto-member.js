import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, YoutubeVideo, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="arto-member">
    <Container>
      <Title>
        (POC) NFT Memberships Artopologi <Badge>2024</Badge>
      </Title>
      <P>
        In this Project I Focus on Web3 implementation for NFT Memberships to provide exclusive access to artist events, behind-the-scenes content, and special discounts. It could be a great way to build a stronger community and reward loyal customers.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://memberships-nft.vercel.app/">
            https://memberships-nft.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blockchain (Ethereum), ERC-1155, Next, Tailwind, React</span>
        </ListItem>
      </List>
      <WorkImage src="https://www.upwork.com/att/download/portfolio/persons/uid/890387443404328960/profile/projects/files/3f0162f7-693a-463e-8cde-d71c49424553" alt="Artopologi Member"/>
      <WorkImage src="https://www.upwork.com/att/download/portfolio/persons/uid/890387443404328960/profile/projects/files/9ac5b91d-0ba5-4546-932d-9d5626b5777a" alt="Artopologi Member"/>
    </Container>
  </Layout>
)

export default Work;
