import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 5rem;
    color: ${(props) => props.theme.gold};
  }

  .Titulo {
    display: flex;

    svg {
      margin-right: 0.5rem;
    }

    h2 {
      font-size: 1rem;
      color: ${(props) => props.theme['gray-300']};
      min-width: 15%;
    }
  }

  span,
  p {
    font-weight: 300;
    font-size: 0.8rem;
  }

  .HorizontalDivider {
    width: 1px;
    height: 1rem;
    margin: 0 0.6rem;
    background-color: ${(props) => props.theme['gray-700']};
  }

  .VerticalDivider {
    width: 100%;
    height: 1px;
    margin: 0.3rem 0;
    background-color: ${(props) => props.theme['gray-700']};
  }

  @media screen and (max-width: 900px) {
    footer {
      flex-direction: column;

      h2 {
        display: none;
      }
    }
  }

  @media screen and (min-width: 900px) {
    .VerticalDivider {
      display: none;
    }
  }
`
export const Player = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme['gray-900']};
`
export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20%;

  svg {
    color: ${(props) => props.theme['gray-400']};
  }

  span {
    margin-right: 0.5rem;
  }

  .ProgressBar {
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 2px;
    margin: 0 0.5rem;
    background-color: ${(props) => props.theme['gray-600']};

    .TimeBar {
      width: 50%;
      height: 2px;
      background-color: ${(props) => props.theme.gold};
    }
  }

  @media screen and (max-width: 900px) {
    & {
      width: 100%;
    }
  }
`

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;

  .Artist {
    display: flex;
    align-items: center;

    .ProfilePic {
      height: 1.2rem;
      width: 1.2rem;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 0.5rem;

      img {
        height: 1.3rem;
        width: 1.3rem;
      }
    }
  }

  span {
    font-weight: bolder;
    color: ${(props) => props.theme['gray-400']};
  }

  @media screen and (max-width: 900px) {
    & {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
  }
`
