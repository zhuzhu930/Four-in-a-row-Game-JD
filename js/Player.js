const { createPromptModule } = require("inquirer");

class Player {
// How will you differentiate between player objects? Will players have a name, or an ID? How would an ID be created or set?
// How will a player's tokens be stored? How many tokens should each player have? How will you store or set that number?
// How will each player's tokens be differentiated from the other player's, visually?
// What are some ways to keep track of whose turn it is?
    constructor(name, id, color, active = false) {
        this.name = name; 
        this.id = id;
        this.color = color;
        this.active = active; 
        this.tokens = this.createTokens(21);
    }

    // Create token objects for Player
    // @params {integer} num - Number of token objects to be created
    
    createTokens(num) {
        const tokens = [];

        for(let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }

        return tokens;
    }
}