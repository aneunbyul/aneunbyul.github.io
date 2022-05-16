import '../styles/globals.css'
import Layout from '../src/components/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global-style'
import { theme } from '../src/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>)
}

export default MyApp
