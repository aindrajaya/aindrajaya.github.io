import {motion} from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../gridItem";

const variants = {
  hidden: {opacity: 0, x: 0, y: 20},
  enter: {opacity: 1, x: 0, y: 20},
  exit: {opacity: 0, x: -0, y: 20},
}
const Layout = ({children, title}) => {
  const a = `${title} - Arista Indrajaya`
  return(
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{duration: 0.4, type: "easeInOut"}}
      style={{position: "relative"}}
    >
      <>
        {title && (
          <Head>
            <title>{a}</title>
            <meta name="twitter:title" content={a} />
            <meta property="og:title" content={a} />
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout