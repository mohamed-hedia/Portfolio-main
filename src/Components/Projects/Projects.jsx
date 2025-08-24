import { useEffect, useState } from "react";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

import Agecalculator from "../../assets/imgs/Agecalculator.png";
import Aroundtheworld from "../../assets/imgs/Aroundtheworld.png";
import Brainwave from "../../assets/imgs/Brainwave.png";
import Calorietracker from "../../assets/imgs/Calorietracker.png";
import Ecommercewepsite from "../../assets/imgs/Ecommercewepsite.png";
import Hangmangame from "../../assets/imgs/Hangmangame.png";
import Kasper from "../../assets/imgs/Kasper.png";
import Leon from "../../assets/imgs/Leon.png";
import MohammedWorld from "../../assets/imgs/MohammedWorld.png";
import Movieapp from "../../assets/imgs/Movieapp.png";
import OmniFood from "../../assets/imgs/OmniFood.png";
import RockPaperScissorsGame from "../../assets/imgs/RockPaperScissorsGame.png";
import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 300, once: false, offset: 100 });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "CSS & HTML", "JavaScript", "React", "Next"];

  const projects = [
    {
      title: "Movie App",
      img: Movieapp,
      liveDemo: "https://movie-app-one-rho.vercel.app/",
      repo: "https://github.com/mohamed-hedia/Movie-App",
      description:
        "Movie app to track films and series, showing ratings, details, images, with personal watchlists and sharing recommendations.",
      category: "React",
    },
    {
      title: "ِAround the world",
      img: Aroundtheworld,
      liveDemo: "https://around-the-world-xi.vercel.app/",
      repo: "https://github.com/mohamed-hedia/Around-The-World-main",
      description:
        "Explore all countries of the world with capitals, currencies, and population details in an interactive, easy-to-use application.",
      category: "React",
    },
    {
      title: "E-Commerce",
      img: Ecommercewepsite,
      liveDemo: "https://e-commerce-main-phi.vercel.app/",
      repo: "https://github.com/mohamed-hedia/E-commerce",
      description:
        "An e-commerce platform to browse, search, and purchase products online with secure checkout, user accounts, and order management.",
      category: "React",
    },
    {
      title: "OmniFood",
      img: OmniFood,
      liveDemo: "https://omni-food-main.vercel.app/",
      repo: "https://github.com/mohamed-hedia/OmniFood_main",
      description:
        "Omni Food is a food delivery app connecting users with restaurants, enabling quick orders, real-time tracking, and personalized meal options.",
      category: "CSS & HTML",
    },
    {
      title: "Brain wave",
      img: Brainwave,
      liveDemo: "https://brain-wave-rho-gray.vercel.app/",
      repo: "https://github.com/mohamed-hedia/Brain-wave",
      description:
        "BrainwaveCurve is an AI chat app that boosts productivity, enabling seamless communication, smart assistance, and innovative solutions for everyday tasks.",
      category: "JavaScript",
    },
    {
      title: "Calorie Tracker",
      img: Calorietracker,
      liveDemo: "https://vercel.com/mohammed-hedias-projects/calorie-tracker",
      repo: "https://github.com/mohamed-hedia/Calorie-Tracker",
      description:
        "Calorie Tracker helps monitor daily food intake, track calories, manage nutrition goals, and promote healthier eating habits efficiently.",
      category: "React",
    },
    {
      title: "Leon Template",
      img: Leon,
      liveDemo: "https://html-and-css-template-one-seven.vercel.app/",
      repo: "https://github.com/mohamed-hedia/HTML_And_CSS_Template_one",
      description:
        "Leon Agency: Design, development, UI/UX, graphic, web, innovative projects, creativity, simplicity, communication, turning ideas into global presence.",
      category: "CSS & HTML",
    },
    {
      title: "Kasper Template",
      img: Kasper,
      liveDemo: "https://html-and-css-template-two-rust.vercel.app/",
      repo: "https://github.com/mohamed-hedia/HTML_And_CSS_Template_two",
      description:
        "Creative agency offering design, portfolio, responsive web, photography, video, skills, pricing plans, testimonials, contact, modern clean solutions.",
      category: "CSS & HTML",
    },
    {
      title: "Mohammed World",
      img: MohammedWorld,
      liveDemo: "https://html-and-css-template-three-ivory.vercel.app/",
      repo: "https://github.com/mohamed-hedia/HTML_And_CSS_Template_three",
      description:
        "Personal site sharing articles, gallery, features, team, skills, services, events, pricing, videos, testimonials, stats, discounts, contact details.",
      category: "CSS & HTML",
    },
    {
      title: "Hangman Game",
      img: Hangmangame,
      liveDemo: "https://hangman-game-two-sandy.vercel.app/",
      repo: "https://github.com/mohamed-hedia/Hangman-Game",
      description:
        "Hangman is a word-guessing game. Guess letters, avoid mistakes, reveal the word before running out of tries to win.",
      category: "JavaScript",
    },
    {
      title: "Age Calculator",
      img: Agecalculator,
      liveDemo: "https://age-calculator-nine-lyart.vercel.app/",
      repo: "https://github.com/mohamed-hedia/Age-Calculator",
      description:
        "An Age Calculator is a web app that helps users calculate their age based on their birth date.",
      category: "JavaScript",
    },
    {
      title: "rock-paper-scissors-game",
      img: RockPaperScissorsGame,
      liveDemo: "https://rock-paper-scissors-game-two-roan.vercel.app/",
      repo: "https://github.com/mohamed-hedia/Rock-Paper-Scissors-Game",
      description:
        "is a simple hand game where two players choose rock, paper, or scissors. Rules: rock beats scissors, scissors beats paper, paper beats rock. It’s often used for fun or decision-making.",
      category: "JavaScript",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="Projects"
      className="relative scroll-mt-28 bg-black text-white py-16 md:py-20 overflow-hidden"
    >
      <FloatingFAIcons
        icons={[faCode, faHtml5, faCss3Alt, faJs, faReact, faBootstrap]} // أو خليها [faCode] بس
        count={10} // أقل عدد زي ما طلبت
        colors={["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"]}
        sizeRange={[20, 34]} // أكبر شوية وواضح
        duration={[12, 20]} // طفو هادي
        sway={22} // تمايل أفقي
      />
      {/* خلفية */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 45%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20">
        {/* العنوان */}
        <div className="mb-8 text-center">
          <h2
            className="inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
                       bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent
                       drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]"
          >
            My Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Selected works focused on speed, accessibility, and clean UX.
          </p>
        </div>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white border-primary-400"
                  : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative  rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md
                          shadow-[0_0_24px_rgba(59,130,246,0.08)]
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
            >
              <Card {...project} />
            </div>
          ))}
        </div>

        {/* ملاحظة */}
        <div className="mt-8 text-center text-xs text-white/50">
          * More projects available upon request.
        </div>
      </div>
    </section>
  );
}
