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
    questionChild: "Your friend asks for your phone number. What should you do?",
    questionParent: "Your child's friend asks for his / her phone number. What should he / she do?",
    answers: [
      "Tell mummy / daddy",
      "Give the phone number",
      "Don't give the phone number",
    ],
  },
  {
    questionChild: "Your friend wants to see your house. What should you do?",
    questionParent: "Your child's friend wants to see his / her house. What should he / she do?",
    answers: [
      "Tell mummy / daddy",
      "Show my house to my friend",
      "Don't show my house",
    ],
  },
  {
    questionChild: "Your friend asks you to play a different game. What should you do?",
    questionParent: "Your child's friend asks him / her to play a different game. What should he / she do?",
    answers: [
      "Ask mummy / daddy if it is ok",
      "Play the new game",
      "Don't play"
    ],
  },
  {
    questionChild: "What will you do before you start playing a game?",
    questionParent: "What should your child do before he / she starts playing a game?",
    answers: [
      "Tell mummy / daddy",
      "Play the new game",
      "Don't play"
    ],
  },

  {
    questionChild: "You saw something scary while playing the game. What should you do?",
    questionParent: "Your child saw something scary while playing the game. What should he / she do?",
    answers: [
      "Tell mummy / daddy",
      "Tell my friends",
      "Don't do anything / I don't know",
      "Continue playing the game",
    ],
  },
  {
    questionChild: "Your friend asks for your photo. What should you do?",
    questionParent: "Your child's friend asks for his / her photo. What should he / she do?",
    answers: [
      "Tell mummy / daddy",
      "Give my photo",
      "Don't give my photo",
      "Ask for your friends photo first",
    ],
  },
];

export default fisherYates(QUESTIONS);
