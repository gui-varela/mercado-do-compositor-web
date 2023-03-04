import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Home />
    </ThemeProvider>
  )
}

export default App
