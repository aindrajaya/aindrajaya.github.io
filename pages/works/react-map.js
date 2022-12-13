import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="reactmap">
    <Container>
      <Title>
        React Map <Badge>2022</Badge>
      </Title>
      <P>
        This project enhancing ReactJS GIS implementation using Leaflet. This project has a tool for visualizing and analyzing spatial data. It uses GeoJSON files as input and allows users to view and manipulate the data in various ways.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-map-seven.vercel.app/">
            https://react-map-seven.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Leaflet, React, Vite, GeoJSON</span>
        </ListItem>
        <ListItem>
          <Meta>Blogspot</Meta>
          <Link>
            Haven`t any
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/react-map1.gif" alt="react-map"/>
      <WorkImage src="/images/works/react-map2.png" alt="react-map"/>
    </Container>
  </Layout>
)

export default Work;
