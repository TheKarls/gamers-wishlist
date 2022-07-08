import 'rsuite/dist/rsuite.min.css'
import '../styles/globals.scss'
import '../styles/theme/theme.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'src/context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
