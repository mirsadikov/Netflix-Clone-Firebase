import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';

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

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder='Email address' />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
