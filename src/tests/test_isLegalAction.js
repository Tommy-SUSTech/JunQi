const JunqiGame = require('../logic/junqiLogic.js');

const args = process.argv.slice(2);
const state = args[0];
const move = args[1];

junqi_game = new JunqiGame(state);

console.log(junqi_game.isLegalAction(move));
