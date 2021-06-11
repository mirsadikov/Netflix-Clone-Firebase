import styled from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Image = styled.img`
  height: auto;
  max-width: ${({ extra }) => (extra ? '55%' : '100%')};
  margin: auto;
  display: block;
`;

export const Pane = styled.div`
  /* width: 50%; */
  padding: 0 20px;
  position: relative;

  @media (max-width: 1000px) {
    width: 100% !important;
    padding: 0 45px;
    text-align: center;
  }

  &::before {
    ${({ extra }) =>
      extra &&
      `content: 'Downloading...';
      display: flex;
      align-items: center;
      height: 15%;
      width: 55%;
      max-width: 380px;
      background-color: #000;
      z-index: 999;
      border: 2px solid rgba(255,255,255,.25);
      position: absolute;
      padding: .5em .75em;
      text-align: center;
      box-shadow: 0 0 2em 0 #000;
      position: absolute;
      border-radius: .75em;
      left: 50%;
      bottom: 8%;
      transform: translateX(-50%);`}
  }

  /* > ${Image}::after {
    content: ' ';
    height: 50px;
    width: 50px;
    background-color: yellow;
    z-index: 999;
    position: absolute;
  } */
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 1.625rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
