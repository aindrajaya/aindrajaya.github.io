import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Leanlytics">
    <Container>
      <Title>
        Leanlytics <Badge>2025</Badge>
      </Title>
      <P>
        Leanlytics.co is a comprehensive analytics platform designed to help businesses make data-driven decisions and optimize their operations. The platform provides powerful insights, metrics, and visualization tools to track performance and drive growth.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.leanlytics.co/" target="_blank">
            https://www.leanlytics.co/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Analytics, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Collaboration Work</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/leanlytics.png" alt="Leanlytics"/>
    </Container>
  </Layout>
)

export default Work;
