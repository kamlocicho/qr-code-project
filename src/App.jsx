import { ThemeProvider } from "styled-components"
import Card from "./components/Card"
import { Container } from "./components/styles/Container"
import GlobalStyles from "./components/styles/GlobalStyles"

const theme = {
  layout: {
    mobile: '375px',
    desktop: '1440px'
  },
  colors: {
    white: "hsl(0, 0%, 100%)",
    light_gray: "hsl(212, 45%, 89%)",
    grayish_blue: "hsl(220, 15%, 55%)",
    dark_blue: "hsl(218, 44%, 22%)",
  },
  font_size: '15px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Card />
      </Container>
    </ThemeProvider>
  )
}

export default App
