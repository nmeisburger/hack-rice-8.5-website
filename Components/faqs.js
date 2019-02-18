import { Box, Flex } from 'rebass';
import { Element } from 'react-scroll';
import { background, lightAccentColor } from '../styles/colors.json'
import { mainFont } from '../styles/fonts.json';

const questions = [
  {
    question: "How long is HackRice?",
    answer:
      "The event is held from Friday, March 1st to Saturday, March 2nd. Students hack for 24 hours. A schedule will be posted closer to the start of the event."
  },
  {
    question: "How many hackers per team are permitted?",
    answer:
      "Team are limited to 4 hackers. That being said, you don't have to have 4 hackers to compete."
  },
  {
    question: "Is there a HackRice Facebook page?",
    answer: (
      <>
        Yes there is! Click{" "}
        <a className="styledlink" font-color="#103063" href="https://www.facebook.com/hackrice/">
          here
          </a>{" "}
        to access it!
        </>
    )
  },
  {
    question: "How do I submit my project? Is there a Devpost?",
    answer: (
      <>
        You can submit your project on{" "}
        <a className="styledlink" href="https://hackrice8.devpost.com/">
          this Devpost link
          </a>
      </>
    )
  },
  {
    question: "Will there be free food?",
    answer:
      "Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going."
  },
  {
    question: "What do I need to bring?",
    answer:
      "Please bring a student ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, sleeping bag, and pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."
  },
  {
    question: "What if I'm not very experienced?",
    answer:
      "We do our best to point people in the right direction and use tools and languages with a low barrier to entry. There will also be upperclassmen participating in the hackathon who can guide you in the right direction. We will also be having workshops during the hackathon!"
  },
  {
    question: "Can Rice alumni attend?",
    answer:
      "Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes."
  },
  {
    question: "What if I don't have a team before the event?",
    answer:
      "You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to."
  },
  {
    question: "Do I need to stay the whole time?",
    answer:
      "Nope, we are not a lock-in. We realize that 24 hours is a long time, and that some people might need fresh air or to tend to other commitments. You may leave and go as you deem necessary, though we prefer you to stay!"
  }
].map(item => {
  item.key = `faq-${item.question}`;
  return item;
});

const faqs = () => (
  <Element name='faqs'>
    <Flex justifyContent="center" py={50}>
      <Box width={0.6}>
        <h1 className='title'>
          FAQs
        </h1>
        <Flex justifyContent="center">
          <Box>
            {
              questions.map(({ question, answer, key }) => (
                <div key={key}>
                  <h2><img src="https://icon.now.sh/question_answer/FFFFFF/26" />{'  '}{question}</h2>
                  <h4><img src="https://icon.now.sh/arrow/FFFFFF/12" />{'  '}{answer}</h4>
                </div>
              ))
            }
          </Box>
        </Flex>
      </Box>
    </Flex>
    <style jsx global>{`
            body {
                background: ${background};
            }

            .stylelink {
                color: #103063;
            }

            .title {
              font-family: ${mainFont};
              font-size: 3em;
            }
        `}</style>
  </Element>
);

export default faqs
