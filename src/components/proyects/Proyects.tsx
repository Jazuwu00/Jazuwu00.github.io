
import Proyect from "./Proyect";

const imagesTicTacToe = [
  { src: "./assets/proyects/tateti.png", alt: "Slide 1" },
  { src: "./assets/proyects/tatetiStats.png", alt: "Slide 2" },
];
const imagesCalculator = [
  { src: "./assets/proyects/calculadora.png", alt: "Slide 1" },
];
const imagesNetflix = [
  { src: "./assets/proyects/demo1.PNG", alt: "Slide 1" },
  { src: "./assets/proyects/demo2.PNG", alt: "Slide 2" },
];
const imagesTodo = [{ src: "./assets/proyects/ToDoList.png", alt: "Slide 1" }];
const imagesEditorMemes = [
  { src: "./assets/proyects/meme.png", alt: "Slide 1" },
];
const imagesDamas = [
  { src: "./assets/proyects/menuDamas.png", alt: "Slide 1" },
  { src: "./assets/proyects/gameDamas.png", alt: "Slide 2" },

  { src: "./assets/proyects/inGameDamas.png", alt: "Slide 3" },

  { src: "./assets/proyects/wonDamas.png", alt: "Slide 4" },
];
function Proyects() {
  return (
    <div
      className="relative z-20  text-white overflow-hidden  p-4 lg:px-20"
      id="proyects"
    >
      <h2 className=" font-bold text-3xl mb-6  w-full border-2 rounded-3xl p-4 border-white/10 ">Proyects</h2>
      <Proyect
        title="To do list"
        description="a to-do list made with React, it has a responsive design and you can add, delete and mark tasks as completed"
        link="https://github.com/Jazuwu00/Damas"
        images={imagesTodo}
        technologies={["React", "HTML5", "CSS3", "Typescript"]}
      />
      <Proyect
        title="checkers game"
        description="a checkers game made with Java and MySQL as the database, in the game you can play against another player, save your game, view the rules, and charge your game"
        link="https://github.com/Jazuwu00/Damas"
        images={imagesDamas}
        technologies={["Java", "MySQL"]}
      />

      <Proyect
        title="tic-tac-toe game"
        description="a simple tic-tac-toe game using Java and MySQL as the database, in the game you can play against a bot, save your game, view your statistics, and change the language"
        link="https://github.com/Jazuwu00/TaTeTi---java"
        images={imagesTicTacToe}
        technologies={["Java"]}
      />
      <Proyect
        title="Calculator"
        description="Calculator made with HTML, CSS and JavaScript."
        link="https://sprightly-bonbon-1e9808.netlify.app/"
        images={imagesCalculator}
        technologies={["JavaScript", "CSS3", "HTML5"]}
      />
      <Proyect
        title="Netflix clone"
        description="a netflix clone made with React, Tailwind and Typescript, it has a responsive design and dark mode"
        link="https://github.com/Jazuwu00/netflix-clone-using-react?tab=readme-ov-file"
        images={imagesNetflix}
        technologies={["React", "JavaScript", "HTML5", "CSS3"]}
      />
      <Proyect
        title="Editor Memes"
        description="a to-do list made with React, it has a responsive design and you can add, delete and mark tasks as completed"
        link="https://github.com/Jazuwu00/Editor-Memes"
        images={imagesEditorMemes}
        technologies={["React", "HTML5", "CSS3", "Typescript"]}
      />
    </div>
  );
}

export default Proyects;
