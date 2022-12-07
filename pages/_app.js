import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../components/fonts";
import Layout from "../components/layouts/main";
import theme from "../libs/theme";
import "../styles/terminal.css"
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

const Theweb = ({Component, pageProps, router}) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route}/>
          <Analytics />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Theweb;