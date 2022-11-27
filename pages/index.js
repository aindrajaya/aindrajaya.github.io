import NextLink from "next/link";
import { Link, Container, Box, Heading, chakra, Image, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { BioSection, BioYear } from "../components/bio";

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
        <Paragraph>
          Arista is a front-end developer and educator based in Indonesia. His recent collaboration project is called Artopologi, an NFT marketplace that integrates physical assets with a web3 environment. Arista is passionate about creating digital solutions that solve real-life problems and has a talent for launching successful products from ideation to implementation. In addition to his work in tech, Arista enjoys teaching and empowering others to learn and grow in the field. When he's not coding, Arista loves exploring creative hobbies like writing articles and designing.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="green"
          >
            My Portofolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>29 Years Ago</BioYear>
          Born in Madiun, Indonesia
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Bachelor Degree of Information Technology at State University of Surabaya
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2022</BioYear>
          Working as Frontend mentor at the well-known tech education institution in Indonesia called Binar Academy
        </BioSection>
        <BioSection>
          <BioYear>2019 - Present</BioYear>
          Working as Freelancer
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page;