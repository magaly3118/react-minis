import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Emoji = {
  BEGINNER: "👶",
  INTERMEDIATE: "👍",
  ADVANCED: "💪",
};

const Level = {
  BEGINNER: 0,
  INTERMEDIATE: 1,
  ADVANCED: 2,
};

const skills = [
  {
    name: "React",
    color: "#bcf0d2",
    emoji: "0x1F49A",
    level: Level.BEGINNER,
  },

  {
    name: "SQL",
    color: "#f1c6ea",
    emoji: "0x1FA77",
    level: Level.INTERMEDIATE,
  },

  {
    name: "Python",
    color: "#edf1c6",
    emoji: "0x1F49B",
    level: Level.ADVANCED,
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const showEmoji = (codePoint) => String.fromCodePoint(codePoint);

function Avatar() {
  return <img className="avatar" src="Raven.jpg" alt="Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Magaly Camacho {showEmoji("0x1FA75")}</h1>
      <p>Senior studying Computer Science at KU.</p>
    </div>
  );
}

function Skill({ name, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === Level.ADVANCED && Emoji.ADVANCED}
        {level === Level.INTERMEDIATE && Emoji.INTERMEDIATE}
        {level === Level.BEGINNER && Emoji.BEGINNER}
      </span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill.name} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
