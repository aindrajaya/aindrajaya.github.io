import { Container, Badge, Link, List, ListItem, SimpleGrid, Box, Heading, Image as ChakraImage } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Dash Portfolio">
    <Container>
      <Title>
        Dash Portfolio <Badge>2025</Badge>
      </Title>
      <P>
        A modern, responsive portfolio dashboard showcasing my latest projects and work. This subdomain features a dynamic project listing with optimized mobile and web views for seamless browsing across all devices. Built with modern web technologies and best practices for performance and user experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dash.aindrajaya.my.id/" target="_blank">
            https://dash.aindrajaya.my.id/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>Web, Responsive Design, Mobile-Optimized</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, React, Chakra UI, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Responsive Layout, Image Optimization, Fast Loading</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} mt={8} mb={4}>
        Key Features
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <strong>Responsive Design</strong> - Seamlessly adapts between mobile, tablet, and desktop views
        </ListItem>
        <ListItem>
          <strong>Optimized Images</strong> - Web and mobile-specific image formats for faster loading
        </ListItem>
        <ListItem>
          <strong>Project Showcase</strong> - Grid-based layout displaying all portfolio projects
        </ListItem>
        <ListItem>
          <strong>Modern UI</strong> - Clean and intuitive interface built with Chakra UI
        </ListItem>
        <ListItem>
          <strong>Performance</strong> - Lazy loading and image optimization for better performance
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} mt={8} mb={4}>
        Layout Views
      </Heading>

      <Heading as="h5" fontSize={14} mt={6} mb={3} fontWeight="semibold">
        Web View
      </Heading>
      <P>
        On larger screens, the portfolio displays a multi-column grid layout showcasing all projects side by side. The layout includes detailed project cards with thumbnails, titles, and descriptions for quick browsing.
      </P>
      <WorkImage src="/images/works/dash-web.avif" alt="Dash Portfolio - Web View"/>

      <Heading as="h5" fontSize={14} mt={6} mb={3} fontWeight="semibold">
        Mobile View
      </Heading>
      <P>
        On mobile devices, the layout adapts to a single-column view with optimized spacing and touch-friendly interactive elements. Images are served at appropriate sizes for faster loading on mobile networks.
      </P>
      <Box maxW="320px" mx="auto">
        <WorkImage src="/images/works/dash-mobile.avif" alt="Dash Portfolio - Mobile View"/>
      </Box>

      <Heading as="h4" fontSize={16} mt={8} mb={4}>
        Project Gallery
      </Heading>
      <SimpleGrid columns={[1, 2]} gap={4} mt={4}>
        <WorkImage src="/images/works/dash-projects-1.avif" alt="Project List View"/>
        <WorkImage src="/images/works/dash-projects-1.avif" alt="Project Details"/>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work;
