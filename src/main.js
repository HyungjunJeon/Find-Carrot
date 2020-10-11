"use strict";

import PopUp from "./popup.js";
import * as sound from "./sound.js";
import { GameBuilder, Reason } from "./game.js";

const gameFinishbanner = new PopUp();
gameFinishbanner.setClickListener(() => {
  game.start();
});

const game = new GameBuilder()
  .withGameDuration(5)
  .withCarrotCount(5)
  .withBugCount(5)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay❓";
      sound.playAlert();
      break;
    case Reason.win:
      message = "YOU WON 🎉";
      sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST 💩";
      sound.playBug();
      break;
    default:
      throw new Error("not valid reason");
  }

  gameFinishbanner.showWithText(message);
});
