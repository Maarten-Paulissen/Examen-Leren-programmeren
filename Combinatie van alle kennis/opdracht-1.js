const cursisten = [
  {
    spreek: () => {
      console.log("Jordy is cool!");
    },
    naam: "Angelique",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is hip!");
    },
    naam: "Arne",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is de beste!");
    },
    naam: "Domenico",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is hilarisch!");
    },
    naam: "Ian",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is grappig!");
    },
    naam: "Jochen",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is funny!");
    },
    naam: "Jorg",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is stoer!");
    },
    naam: "Marco",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo cool!");
    },
    naam: "Marvi",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo hip!");
    },
    naam: "Michelle",
    score: 0,
  },
  {
    spreek: () => {},
    naam: "Romy",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo grappig!");
    },
    naam: "Simone",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo funny!");
    },
    naam: "Tony",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo stoer!");
    },
    naam: "Yoeri",
    score: 0,
  },
];
const docent = {
  spreek: (eersteDeel) => {
    return `${eersteDeel} cool, hip, hilarisch, grappig, funny en stoer!`;
  },
  naam: "Jordy",
};

function hackDeScore() {
  let i = 0;
  while (i < cursisten.length) {
    cursisten[i].score = 69;
    i++;
    return cursisten[i].score;
  }
}
function printInformatieCursisten(alleCursisten) {
  for (let i = 0; i < alleCursisten.length; i++) {
    return (
      "Mijn naam is: " +
      cursisten[i].naam +
      ", Mijn score is: " +
      cursisten[i].score
    );
  }
}
function printMeningDocent(mening) {
  return docent.spreek(mening);
}

console.log(hackDeScore());
console.log(printInformatieCursisten(cursisten));
console.log(`Docent zegt: ${printMeningDocent("Alle curisten zijn")}`);
