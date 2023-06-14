const constants = { // my object for holding constant data all in one location
  IP: "localhost",
  PORT: 50541,
  Name: 'Name: KDL',
  '\u0061': 'Move: left',
  '\u0073': 'Move: down',
  '\u0077': 'Move: up',
  '\u0064': 'Move: right',
  '\u0065': function() { // creating a basic anonymous function that chooses a random taunt string from the array
    const taunts = ['Say: AYE IM WALKIN HERE', 'Say: GG', 'Say: Free Armor Trimming', 'Say: Jungle Diff'];
    const randomIndex = Math.floor(Math.random() * taunts.length);
    const randomTaunt = taunts[randomIndex];
    return randomTaunt;
  }
};

module.exports = constants; // exporting the object to be used in different areas within the program