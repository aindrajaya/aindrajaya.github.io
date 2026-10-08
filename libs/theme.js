import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: props => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props)
    }
  })
}

const sectionTitle = {
  textDecoration: 'underline',
  fontSize: 20,
  textUnderlineOffset: 6,
  textDecorationColor: "#525252",
  textDecorationThickness: 4,
  marginTop: 3,
  marginBottom: 4
}

const components = {
  Heading: {
    variants: {
      'sections-title': sectionTitle,
      'section-title': sectionTitle,
      'page-title': {
        textDecoration: 'none',
        fontSize: 32,
        fontWeight: 'bold'
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "M PLUS Rounded 1c"
}

const colors = {
  grassTeal: "#88ccca"
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true
}

const theme = extendTheme({config, styles, components, fonts, colors})
export default theme;