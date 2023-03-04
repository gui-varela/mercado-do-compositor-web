import { Container, Player, Description, Options } from './styles'
import { Star, Play, SkipForward, Heart } from 'phosphor-react'

import profilePic from '../../assets/musico.png'

export function Footer() {
  return (
    <Container>
      <Player>
        <footer>
          <div className="Titulo">
            <Star />
            <h2>Música em destaque</h2>
          </div>

          <Description>
            <div className="Artist">
              <div className="ProfilePic">
                <img src={profilePic} alt="" />
              </div>
              <span>João Paulo</span>
            </div>

            <div className="HorizontalDivider"></div>
            <p>Nome da música</p>
            <div className="HorizontalDivider"></div>
            <span>Samba</span>
          </Description>

          <div className="VerticalDivider"></div>

          <Options>
            <Play weight="fill" size={20} />
            <div className="ProgressBar">
              <div className="TimeBar"></div>
            </div>
            <span>2:41</span>
            <SkipForward weight="fill" size={20} />
            <div className="HorizontalDivider"></div>
            <Heart weight="bold" size={20} />
          </Options>
        </footer>
      </Player>
    </Container>
  )
}
