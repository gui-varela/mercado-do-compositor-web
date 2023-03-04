import styled from 'styled-components'

import bgImg from '../../assets/banner-bg-img.jpg'

export const Container = styled.div`
  padding-top: 5rem;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 5rem 10rem;
    background-image: linear-gradient(90deg, #00000066, #00000000 70%),
      url(${bgImg});
    height: 90vh;
    background-size: cover;

    .Content {
      width: 50%;

      h1 {
        color: ${(props) => props.theme.gold};
        font-size: 3.5rem;
        line-height: 4rem;
        margin: 1rem 0;
        text-shadow: 0px 7px 10px ${(props) => props.theme['gray-900']};
      }

      p {
        font-size: 1.2rem;
        font-weight: 300;
        font-style: italic;
        color: ${(props) => props.theme['gray-300']};
        margin: 2rem 0;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6rem;
        background-color: ${(props) => props.theme.translucidBlack};
        padding: 1rem 2rem;
        border: 2px solid ${(props) => props.theme.gold};
        border-radius: 50px;
        color: ${(props) => props.theme['gray-100']};
        font-weight: bolder;
        font-size: 1.3rem;
        box-shadow: 0px 10px 10px ${(props) => props.theme['gray-900']};

        svg {
          margin-right: 1rem;
        }
      }
    }
  }
`
