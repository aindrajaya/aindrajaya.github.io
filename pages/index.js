import NextLink from "next/link";
import { List, Link, Container, Box, Heading, chakra, Image, Button, useColorModeValue, ListItem } from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import useWindowSize from "../libs/useWindowSize";

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
})

const Page = () => {
  const isSizeX = useWindowSize().width > 610;
  const isSizeY = useWindowSize().width < 610;
  const buttonColorScheme = useColorModeValue("yellow","green");

  return (
    <Container>
      <Box 
        borderRadius="lg" 
        bg={useColorModeValue("#C8B6A6","green")}
        p={2} 
        mb={3} 
        align="center"
        >
        I&apos;m Website Apps Developer based in Indonesia
        {isSizeX && <Button
          as={NextLink}
          href="/works"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          colorScheme={buttonColorScheme}
          ml={3}
          >
            Check Portfolio
          </Button>}
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
              src="https://res.cloudinary.com/colbycloud-apps/image/upload/f_avif/q_auto/v1/imagecarbon/xz2us6inc50k2hklqrgu?_a=AVAEwDV0"
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
          Arista is a front-end developer and educator based in Indonesia. His recent collaboration project is called Artopologi, an NFT marketplace that integrates physical assets with a web3 environment. Arista is passionate about creating digital solutions that solve real-life problems and has a talent for launching successful products from ideation to implementation. In addition to his work in tech, Arista enjoys teaching and empowering others to learn and grow in the field. When he`s not coding, Arista loves exploring creative hobbies like writing articles and designing.
        </Paragraph>
        {
          isSizeY && 
            <Box align="center" my={4}>
              <Button
                as={NextLink}
                href="/works"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
                colorScheme={buttonColorScheme}
                ml={3}
                >
                Check Portfolio
              </Button>
            </Box>
          }
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Nature,{' '}
          <Link href="https://www.youtube.com/watch?v=4TuggkDPw6A" target="_blank">
            Football ⚽
          </Link>
          , Teaching, Blockchain, and NLP
        </Paragraph>
      </Section>
      
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the Web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/aindrajaya" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @aindrajaya
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/aindrajayaa" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @aindrajayaa
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/arista.indrajaya" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @arista.indrajaya
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>
        <Box align="center" my={4}>
          <Button
            isDisabled={true}
            as={NextLink}
            href="/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme={useColorModeValue("yellow","green")}
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  )
}

export default Page;