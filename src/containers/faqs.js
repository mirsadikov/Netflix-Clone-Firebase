import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id} style={{ borderRadius: 10 }}>
          <Accordion.Header id={item.id}>{item.header}</Accordion.Header>
          <Accordion.Body id={item.id}>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
