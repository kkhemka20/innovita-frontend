import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const eventsData = [
  {
    name: "Blitz Sixty:60",
    description:
      "BLITZ SIXTY:60 is a fast-paced, fun, and knowledge-packed business quiz designed to challenge your brain, reflexes, and presence of mind. From finance to marketing, from brand taglines to visual recall - this quiz covers it all!",
    rounds: [
      "MCQ Trivia",
      "Logo / Picture Identification",
      "Tagline / Audio Round",
      "Rapid Fire Finale",
    ],
    teamSize: "1-3 members",
  },
  {
    name: "RRR Recruit. Retain. Rule.",
    description:
      "Step into the shoes of HR professionals! RRR is a dynamic, 3-round competition designed to simulate real-world human resource scenarios. Participants will face challenges testing their knowledge of HR practices, leadership capabilities, and policy-making skills.",
    rounds: [
      "HR IQ - Quiz Round",
      "Leadership in Action",
      "Policy Design Challenge",
    ],
    teamSize: "1-3 members",
  },
  {
    name: "The Spin Room",
    description:
      "PR challenges decoding crises, jamming on viral failures, and spinning their way to clever solutions using mystery objects. It's a battle of wordplay, spontaneity, and crisis control, judged by sharp minds and set against an high-energy atmosphere.",
    rounds: [
      "The Analyst’s Desk",
      "The Insight Jam",
      "Spin & Strategize",
    ],
    teamSize: "1-3 members",
  },
  {
    name: "Young Manager",
    description:
      "Young Manager is a high-intensity, 3-round competition crafted to uncover the next generation of business leaders. From boardroom tactics to crisis control, this is the ultimate test for any aspiring manager. ",
    rounds: [
      "Business Aptitude Quiz",
      "Case Study Challenge",
      "Stress Q&A + Interview",
    ],
    teamSize: "Individual",
  },
  {
    name: "Hustle Hub",
    description:
      "Hustle Hub is a high-energy branding and business pitch event where creativity meets strategy. From ideation to visual identity, and finally, to the pitch this is the ultimate test of entrepreneurial instinct, teamwork, and storytelling.",
    rounds: [
      "Ideation",
      "Branding & Representation",
      "Final Pitch Presentation",
    ],
    teamSize: "1-3 members",
  },
  {
    name: "Nidhi 360°",
    description:
      "Navigate the twists of real-world finance in NIDHI 360, where teams invest, adapt, and grow their wealth. With market crashes, surprise events, and rapid-fire quizzes, it’s a race for the richest. Budget wisely or risk it all!",
    rounds: [
      "Investment Planning",
      "Real-World Scenarios",
      "Rapid Fire Quiz",
      "Picture Yourself",
    ],
    teamSize: "1-3 members",
  },
  {
    name: "Branding Bazaar",
    description:
      "Branding Bazaar, the ultimate two-round branding challenge where wit meets wild! Showcase bizarre products using bold guerrilla marketing tactics and then debunk popular myths using logic, creativity, and a flair for storytelling.",
    rounds: [
      "Guerrilla Product Marketing",
      "Myth-Busting Showcase",
    ],
    teamSize: "1-3 members",
  },
  {
    name: "Reelocity",
    description:
      "Reelocity is a high-energy, time-bound reel making event that puts your creativity and marketing skills to the test. Participants are challenged to market a traditional product to Gen Z using engaging, trendy, and platform-savvy storytelling methods.",
    rounds: [
      "Product Reveal & Planning",
      "Shoot, Edit & Finalize",
      "Reels will be reviewed by a panel",
    ],
    teamSize: "1-3 members",
  },
  {
    name: "DnD - Decode & Dominate",
    description:
      "Decode & Dominate is an immersive mystery escape challenge where teams dive into three escalating rounds filled with riddles, hidden clues, and cryptic messages. Logic, perception, and teamwork are your only weapons. The deeper you go, the tougher it gets. Only the sharpest minds will make it to the end.",
    rounds: [
      "Riddle Gauntlet",
      "Clue Hunt",
      "Final Decoding",
    ],
    teamSize: "1-3 members",
  },
  {
    name: "Mic Drop Mania",
    description:
      "Bring the boardroom to the comedy club! Mic Drop Mania is a business-themed stand-up comedy contest where wit meets workplace chaos. Participants will transform corporate clichés and office drama into uncontrollable laughter – all while keeping it clean, clever, and classy.",
    rounds: [
      "No rounds"
    ],
    teamSize: "Individual",
  },
  {
    name: "V-Shoot",
    description:
      "V-SHOOT is a dynamic creative photography contest that challenges participants to tell powerful stories through the lens. From themed photography to monochrome aesthetics and storytelling through images.",
    rounds: [
      "Thematic Photography",
      "Monochrome Photography",
      "Storytelling Photography",
    ],
    teamSize: "Individual",
  },
  {
    name: "Poise to Stride",
    description:
      "Poise to Stride is a 4-round fashion and confidence challenge designed to spotlight your creativity, style, and elegance. From design thinking to walking the ramp, this event celebrates expression through fashion and presentation.",
    rounds: [
      "The Concept",
      "The Frame",
      "The Pose Recreate",
      "The Stride",
    ],
    teamSize: "Individual",
  },
  // Add other events in the same format
];

const Events = () => {
  return (
    <section
      id="events"
      className="bg-[url('/stars-bg.jpg')] bg-cover bg-no-repeat bg-center py-20 px-6 text-white"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-center uppercase tracking-wide">
        EVENTS
      </h2>
      <p className="text-lg md:text-xl font-semibold text-justify mb-12 max-w-4xl mx-auto">
        The following are the events of InnoVITa 2025. From competitions that test leadership to informal rounds that spark creativity, each event is designed to bring out your best. Whether you're into strategy, design, finance, or stage presence -there’s something here for everyone! Scroll through the list below and pick your challenge.
      </p>

      <div className="max-w-6xl mx-auto space-y-4">
        {eventsData.map((event, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              textAlign: "left",
              backdropFilter: "blur(6px)",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6" className="font-bold">
                {index + 1}. {event.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="text-left space-y-3">
                <p className="text-base font-medium text-white">
                  {event.description}
                </p>
                <ul className="list-disc list-inside text-sm pl-4">
                  {event.rounds.map((round, idx) => (
                    <li key={idx}>Round {idx + 1}: {round}</li>
                  ))}
                </ul>
                <p className="text-sm"><strong>Team Size:</strong> {event.teamSize}</p>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Events;
