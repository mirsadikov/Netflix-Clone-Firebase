import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ shadow }) =>
      shadow &&
      `linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 40%,
      rgba(0, 0, 0, 0.5) 75%,
      rgba(0, 0, 0, 0.8) 100%
    ),`}
    url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
    center / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }

  @media (max-width: 600px) {
    margin: 0 20px;
    padding: 10px 0;
  }
`;

export const Logo = styled.img`
  height: 35px;
  /* width: 108px; */
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }

  @media (max-width: 950px) {
    height: 30px;
  }

  @media (max-width: 550px) {
    height: 24px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  /* width: 84px; */
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 18px;
  cursor: poiner;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 600px) {
    padding: 5px 10px;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;
