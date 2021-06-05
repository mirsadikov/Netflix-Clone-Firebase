import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';

export function FaqsContainer() {
  console.log(faqsData);
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id} style={{ borderRadius: 10 }}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
