import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assuming these are defined elsewhere
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Updated testimonials array with formatted text
const testimonials = [
  {
    testimonial: (
      <span>
        <span className="font-bold text-[20px] text-teal-400">
          Technical Skills:{" "}
        </span>
        <span className="font-normal text-white">
          HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Responsive
          Web Design, API Integration, Data Structures and Algorithms (DSA) , Object-Oriented Programming (OOP), Problem Solving using
           C++.
        </span>
      </span>
    ),
  },
  {
    testimonial: (
      <span>
        <span className="font-bold text-[20px] text-teal-400">
          Tools & Frameworks:{" "}
        </span>
        <span className="font-normal text-white">
          Git, GitHub, VS Code, React.js, Tailwind CSS, Framer Motion, Figma.
        </span>
      </span>
    ),
  },
  {
    testimonial: (
      <span>
        <span className="font-bold text-[20px] text-teal-400">
          Soft Skills:{" "}
        </span>
        <span className="font-normal text-white">
          Problem-Solving, Analytical Thinking, Attention to Detail, Time
          Management, Communication, Collaboration, Teamwork.
        </span>
      </span>
    ),
  },
];

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = ({ index, testimonial }) => {
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // Simplified GSAP animation for fade-in and slide-up
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // Trigger when the card is 80% from the top of the viewport
          end: "top 50%",
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-black-200 p-12 rounded-3xl xs:w-[360px] w-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-black-300"
      role="article"
      aria-label={`Expertise ${index + 1}`}
    >
      <p className="text-white font-extrabold text-[56px] leading-none">"</p>
      <div className="mt-4">
        <p className="text-[18px] leading-relaxed tracking-wide">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-16 bg-black-100 rounded-[24px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div>
          <p
            className={`${styles.sectionSubText} text-gray-400 text-[20px] tracking-wider`}
          >
            Technical Skills & Strengths
          </p>
          <h2
            className={`${styles.sectionHeadText} text-[56px] font-extrabold mt-4`}
          >
            My Expertise
          </h2>
        </div>
      </div>
      <div
        className={`-mt-16 pb-20 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 justify-items-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={`expertise-card-${index}`}
            index={index}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");