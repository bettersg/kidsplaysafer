export const fisherYates = (array) => {
  let len = array.length;
  let temp;
  let curr;

  // While there remain elements to shuffle…
  while (len) {
    // Pick a remaining element…
    curr = Math.floor(Math.random() * len--);

    // And swap it with the current element.
    temp = array[len];
    array[len] = array[curr];
    array[curr] = temp;
  }

  return array;
};

const QUESTIONS = [
  {
    question: "Your friend asks for your phone number. What should you do?",
    answers: [
      "Tell mummy / daddy",
      "Give the phone number",
      "Don't give the phone number",
    ],
  },
  {
    question: "Your friend wants to see your house. What should you do?",
    answers: [
      "Tell mummy / daddy",
      "Show my house to my friend",
      "Don't show my house",
    ],
  },
  {
    question:
      "Your friend asks you to play a different game. What should you do?",
    answers: ["Ask mummy / daddy if it is ok", "Play the new game", "Don't play"],
  },
  {
    question: "What will you do before you start playing a game?",
    answers: ["Tell mummy / daddy", "Play the new game", "Don't play"],
  },

  {
    question:
      "You saw something scary while playing the game. What should you do?",
    answers: [
      "Tell mummy / daddy",
      "Tell my friends",
      "Don't do anything / I don't know",
      "Continue playing the game",
    ],
  },
  {
    question: "Your friend asks for your photo. What should you do?",
    answers: [
      "Tell mummy / daddy",
      "Give my photo",
      "Don't give my photo",
      "Ask for your friends photo first",
    ],
  },
];

export default fisherYates(QUESTIONS);
