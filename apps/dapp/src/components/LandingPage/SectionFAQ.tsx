import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/UiAccordion';

const FAQ = () => (
  <AccordionItem value={'faq'}>
    <AccordionTrigger className="text-lg md:text-5xl">
      Question
    </AccordionTrigger>
    <AccordionContent>
      <div
        className="[&>p]:py-2 prose"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: 'answer' }}
      />
    </AccordionContent>
  </AccordionItem>
);

export const SectionFAQ = () => {
  return (
    <div className="pt-20 px-4 container mx-auto">
      <h1 className="landing-page__section-heading md:!text-[115px] mb-14">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        <FAQ />
      </Accordion>
    </div>
  );
};
