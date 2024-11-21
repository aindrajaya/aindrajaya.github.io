import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, YoutubeVideo, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="pane">
    <Container>
      <Title>
        Pena <Badge>2023</Badge>
      </Title>
      <P>
        In this Company I Focus on Led the development of various high-impact projects for clients across diverse industries, including game NFT, voice recognition, and Building property and Implemented best practices and coding standards, resulting in improved code quality and reduced project turnaround time on Penateam&lsquo;s main Website
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://penateam.com/" target="_blank">
            https://penateam.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, API, Node.js, JavaScript</span>
        </ListItem>
      </List>

      {/* <YoutubeVideo videoId="UAi2HFmVa68"/> */}
      <WorkImage src="/images/works/pena1.png" alt="Pena"/>
      <WorkImage src="/images/works/pena2.png" alt="Pena"/>
    </Container>
  </Layout>
)

export default Work;
