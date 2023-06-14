const constants = {
  IP: "localhost",
  PORT: 50541,
  Name: 'Name: KDL',
  '\u0061': 'Move: left',
  '\u0073': 'Move: down',
  '\u0077': 'Move: up',
  '\u0064': 'Move: right',
  '\u0065': function() {
    const taunts = ['Say: AYE IM WALKIN HERE', 'Say: GG', 'Say: Free Armor Trimming', 'Say: Jungle Diff'];
    const randomIndex = Math.floor(Math.random() * taunts.length);
    const randomTaunt = taunts[randomIndex];
    return randomTaunt;
  }
};

module.exports = constants;



// '\u0065': 'Say: AYE IM WALKIN HERE',
// '\u0072': 'Say: GG',
// '\u0074': 'Say: Free Armor Trimming',
// '\u0071': 'Say: Jungle Diff'