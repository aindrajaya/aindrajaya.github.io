import { Container, Box, Heading, chakra, Image } from "@chakra-ui/react";
import Section from "../components/section";

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
})

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="green" p={3} mb={6} align="center">
        Hi, I&apos;m Website Apps Developer based in Indonesia
      </Box>

      <Box display={{md: "flex"}}>
        <Box>
          <Heading as="h2" variant="page-title">
            Arista Indrajaya
          </Heading>
          <p>Website Apps Developer (Web3 / React / JavaScript)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{base: 4, md: 0}}
          ml={{md: 6}}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage 
              src="/images/arista.jpeg"
              alt="Profile Image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>Paragraph</p>
      </Section>
    </Container>
  )
}

export default Page;