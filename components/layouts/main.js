import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

const Main = ({children, router}) => {
  return(
    <Box as="main" pt={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Arista's homepage" />
        <meta name="author" content="Arista Indrajaya" />
        <meta name="author" content="aindrajaya" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:site_name" content="Takuya Matsuyama" />
        <meta name="og:title" content="Takuya Matsuyama" />
        <meta property="og:type" content="website" />
        <title>AIndrajaya Source of Information - HomePage</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main;