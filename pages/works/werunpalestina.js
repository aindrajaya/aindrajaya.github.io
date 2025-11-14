import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="We Run Palestina">
    <Container>
      <Title>
        We Run Palestina <Badge>2025</Badge>
      </Title>
      <P>
        WeRunPalestina.id is a charitable running event platform dedicated to raising awareness and support for Palestine through community engagement and fitness activities. The platform enables participants to register for running events, track their progress, and contribute to humanitarian causes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.werunpalestina.id/" target="_blank">
            https://www.werunpalestina.id/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Collaboration Work</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/werunpalestina.png" alt="We Run Palestina"/>
    </Container>
  </Layout>
)

export default Work;
