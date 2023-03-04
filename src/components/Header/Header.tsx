import { Container } from './styles'

import { List, MagnifyingGlass, User, MusicNotes } from 'phosphor-react'

import logo from '../../assets/mc.png'
import { Footer } from '../Footer/Footer'

export function Header() {
  return (
    <Container>
      <header>
        <List size={30} weight="bold" />
        <img src={logo} alt="" />
        <div className="Options">
          <MagnifyingGlass size={24} weight="bold" />
          <User size={24} weight="bold" />
          <div className="Notebook">
            <div className="NotebookEdge"></div>
            <MusicNotes size={14} weight="fill" />
          </div>
        </div>
      </header>
      <Footer />
    </Container>
  )
}
