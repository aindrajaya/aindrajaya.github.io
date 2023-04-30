import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, YoutubeVideo, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="artopologi">
    <Container>
      <Title>
        Artopologi <Badge>2022</Badge>
      </Title>
      <P>
        In this Project I Focus on Web3 implementation and integration with MetaMask to provide wallet interaction by the user to trigger minting, transfer and listing process from Artist (people who have an Artwork)
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://artopologi/">
            https://artopologi.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blockchain (Ethereum), Next, Tailwind, , Node.js</span>
        </ListItem>
        <ListItem>
          <Meta>News</Meta>
          <Link href="https://m.jpnn.com/news/artopologi-gelar-pameran-terintegrasi-blockchain-di-museum-nasional-indonesia-catat-tanggalnya">
            Artopologi Blockchain Integration <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <YoutubeVideo videoId="UAi2HFmVa68"/>
      <WorkImage src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_avif/q_auto/v1/imagecarbon/kpn9xez1qi7kknybqz17?_a=AVAEwDV0" alt="Artopologi"/>
      <WorkImage src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_avif/q_auto/v1/imagecarbon/kndzlkms1ny77g5uvpro?_a=AVAEwDV0" alt="Artopologi"/>
    </Container>
  </Layout>
)

export default Work;
