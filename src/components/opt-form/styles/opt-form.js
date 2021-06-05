import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;
  }

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  box-sizing: content-box;

  width: 100%;
  display: block;
  border: 1px solid #8c8c8c;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  outline: none;
  border-radius: 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  @media (max-width: 1000px) {
    border-radius: 2px;
    height: 50px;
  }

  @media (max-width: 550px) {
    height: 45px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  padding: 0 25px;
  font-size: 26px;
  border: 0;
  border-left: 1px solid #333;
  cursor: pointer;
  border-radius: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    border-radius: 2px;
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    /* font-weight: 600; */
  }

  @media (max-width: 600px) {
    height: 40px;
    margin-top: 15px;
    padding: 0 15px;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 10px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
