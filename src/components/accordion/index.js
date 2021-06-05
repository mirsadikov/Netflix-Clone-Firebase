import { createContext, useState, useContext } from 'react';
import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Frame,
  Body,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(0);

  return (
    <Container {...restProps}>
      <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
        <Inner>{children}</Inner>
      </ToggleContext.Provider>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Accordion.Header = function AccordionHeader({ children, id, ...restProps }) {
  console.log(id);
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => (toggleShow === id ? setToggleShow(0) : setToggleShow(id))}
      {...restProps}>
      {children}
      {toggleShow === id ? (
        <img src='/images/icons/close-slim.png' alt='close' />
      ) : (
        <img src='/images/icons/add.png' alt='open' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, id, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body {...restProps} toggled={toggleShow === id ? true : false}>
      <Frame>{children}</Frame>
    </Body>
  );
};
