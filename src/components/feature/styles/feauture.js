import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 135px 45px;
  border-bottom: 8px solid #222;

  @media (max-width: 600px) {
    padding: 50px 18px 80px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 48px;
  font-weight: bold;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
