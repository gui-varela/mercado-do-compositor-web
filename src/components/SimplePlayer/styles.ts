import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem;

  .audioPlayer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px;
  }

  button {
    display: flex;
    align-items: center;

    svg {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  .currentTime {
    color: ${(props) => props.theme.gold};
    margin: 0 0.5rem;
    font-weight: 300;
  }

  .duration {
    color: ${(props) => props.theme['gray-500']};
    margin-left: 0.5rem;
    font-weight: 300;
  }

  .progressBar {
    --seek-before-width: 100px;

    appearance: none;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 0.5rem;
    outline: none;
    cursor: pointer;
  }

  /* safari */
  .progressBar::-webkit-slider-runnable-track {
    background: ${(props) => props.theme['gray-700']};
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 0.5rem;
    outline: none;
  }

  /* firefox */
  .progressBar::-moz-range-track {
    background: ${(props) => props.theme['gray-700']};
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 0.5rem;
    outline: none;
  }

  .progressBar::-moz-focus-outer {
    border: 0;
  }

  /* chrome and safari */
  .progressBar::before {
    content: '';
    height: 0.5rem;
    width: var(--seek-before-width);
    background-color: ${(props) => props.theme.gold};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

  /* firefox */
  .progressBar::-moz-range-progress {
    height: 0.5rem;
    background-color: ${(props) => props.theme.gold};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  /* knobby chrome and safari */
  .progressBar::-webkit-slider-thumb {
    --webkit-appearance: none;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.theme.gold};
    margin-top: -2px;
    z-index: 3;
    box-sizing: border-box;
  }

  /* knobby while dragging chrome and safari */
  .progressBar:active::-webkit-slider-thumb {
    transform: scale(1.1);
    background-color: ${(props) => props.theme['yellow-700']};
  }

  /* knobby firefox */
  .progressBar::-moz-range-thumb {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    border: transparent;
    background-color: ${(props) => props.theme.gold};
    z-index: 3;
    box-sizing: border-box;
  }

  /* knobby while dragging firefox */
  .progressBar:active::-moz-range-thumb {
    transform: scale(1.1);
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
