"use strict";

import PopUp from "./popup.js";
import Game from "./game.js";

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SECOND = 5;

const gameFinishbanner = new PopUp();
gameFinishbanner.setClickListener(() => {
  game.start();
});

const game = new Game(5, 5, 5);
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case "cancel":
      message = "Replay❓";
      break;
    case "win":
      message = "YOU WON 🎉";
      break;
    case "lose":
      message = "YOU LOST 💩";
      break;
    default:
      throw new Error("not valid reason");
  }

  gameFinishbanner.showWithText(message);
});
