import { Container, Player, Description, Options } from './styles'
import { Star } from 'phosphor-react'

import profilePic from '../../assets/musico.png'
import { SimplePlayer } from '../SimplePlayer/SimplePlayer'

export function Footer() {
  return (
    <Container>
      <Player>
        <footer>
          <div className="Title">
            <Star />
            <h2>Música em destaque</h2>
          </div>

          <div className="VerticalDivider"></div>

          <Description>
            <div className="Artist">
              <div className="ProfilePic">
                <img src={profilePic} alt="" />
              </div>
              <span>João Paulo</span>
            </div>

            <div id="mobileDivider" className="HorizontalDivider"></div>
            <p>Nome da música</p>
            <div className="HorizontalDivider"></div>
            <span className="kindOfMusic">Samba</span>
          </Description>

          <div className="VerticalDivider"></div>

          <Options>
            <SimplePlayer isSimple={true} />
          </Options>
        </footer>
      </Player>
    </Container>
  )
}
