import { Container } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function Home() {
  return (
    <Container>
      <main>
        <div className="Content">
          <h1>Ache a música ideal para o seu projeto</h1>
          <p>Um site que reune um acervo de músicas, trilhas e fonias.</p>
          <button>
            <MagnifyingGlass weight="bold" />
            Faça uma busca
          </button>
        </div>
      </main>
    </Container>
  )
}
