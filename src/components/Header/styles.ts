import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100vw;

  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme.gold};
  box-shadow: 0 10px 20px ${(props) => props.theme.translucidBlack};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7rem;
    padding: 0 5rem;

    img {
      height: 5rem;
      cursor: pointer;
    }

    svg {
      cursor: pointer;
    }
  }

  .Hamburguer {
    rotate: 90deg;
    font-size: 1.4rem;
  }

  .Options {
    display: flex;
    justify-content: space-between;
    width: 7rem;

    .Notebook {
      margin-left: 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.5rem;
      width: 1.5rem;
      padding: 0 0.1rem;
      border: 2px solid ${(props) => props.theme.gold};
      border-radius: 2px;
      cursor: pointer;

      svg {
        margin-left: 0.1rem;
      }

      .NotebookEdge {
        height: 100%;
        border-right: 2px solid ${(props) => props.theme.gold};
      }
    }
  }

  @media screen and (max-width: 900px) {
    header {
      padding: 0 2rem;

      .Options {
        display: flex;
        justify-content: space-between;
        width: 5rem;
      }

      img,
      svg,
      .Notebook {
        scale: 0.7;
      }
    }
  }
`
