import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import Typewriter from "../typewriter";
import Footer from "../footer";

const SITE_URL = "https://aindrajaya.my.id";
const DESCRIPTION = "Arista Indrajaya is a website apps developer based in Indonesia, building high-performance React front-ends and Web3 (Ethereum/Polygon) products.";

const Main = ({children, router, canonical = `${SITE_URL}/`}) => {
  return(
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Arista's homepage" />
        <meta name="author" content="Arista Indrajaya" />
        <meta name="author" content="aindrajaya" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {router.pathname !== "/404" && <link rel="canonical" href={canonical} key="canonical" />}
        <link rel="shortcut icon" href="/favicon40x40.svg" type="image/x-icon" />
        <meta property="og:site_name" content="Arista Indrajaya" />
        <meta property="og:title" content="Arista Indrajaya" key="og:title" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://aindrajaya.my.id/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <title>{"Arista's Source of Information - HomePage"}</title>
      </Head>

      <Navbar path={router.asPath}/>

      <Container maxW="container.md" pt={14}>
        <Box mt={15}>
          <Typewriter />
        </Box>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main;