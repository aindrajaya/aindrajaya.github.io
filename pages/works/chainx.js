import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta, VideoPlayer } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="chainx">
    <Container>
      <Title>
        Chainx - Smart Contract Security Scanner <Badge>2024</Badge>
      </Title>
      <P>
        The ChainX Smart Contract Security Scanner was built using Node.js and Express to create a powerful API. This API allows for easy file uploads and processes those files with a robust vulnerability scanner. A database stores vulnerability patterns and potentially archives scan results for future analysis. The API is deployed on a cloud server with a dedicated domain name for easy accessibility.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://docs.chainx.id/" target="_blank">
            https://docs.chainx.id/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Blockchain (Ethereum, Solidity), API, Express, Could Service , Node.js</span>
        </ListItem>
      </List>
      <VideoPlayer src="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1731082837/profile/portfolio/890387443404328960/znmsorv45yaft7o9c3og.mp4" alt="Video for ChainX Demo"/>
      <WorkImage src="/images/works/chainx1.png" alt="ChainX"/>
      <WorkImage src="/images/works/chainx2.png" alt="ChainX"/>
    </Container>
  </Layout>
)

export default Work;
