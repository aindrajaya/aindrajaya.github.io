import { Container, Box, Heading, Button, useColorModeValue } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";

const CV = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Layout title="CV">
      <Container maxW="container.xl">
        <Heading as="h3" fontSize={20} mb={4}>
          Curriculum Vitae
        </Heading>
        
        <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
          <Button
            as="a"
            href="/Arista-Indrajaya-CV.pdf"
            download="Arista-Indrajaya-CV.pdf"
            leftIcon={<DownloadIcon />}
            colorScheme={useColorModeValue("yellow", "green")}
            size="sm"
          >
            Download PDF
          </Button>
          <Button
            as="a"
            href="/Arista-Indrajaya-CV.pdf"
            target="_blank"
            colorScheme="teal"
            variant="outline"
            size="sm"
          >
            Open in New Tab
          </Button>
        </Box>

        <Box
          bg={bgColor}
          borderRadius="lg"
          borderWidth={1}
          borderColor={borderColor}
          overflow="hidden"
          height="calc(100vh - 200px)"
          minHeight="600px"
        >
          <iframe
            src="/Arista-Indrajaya-CV.pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Arista Indrajaya - CV"
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default CV;
