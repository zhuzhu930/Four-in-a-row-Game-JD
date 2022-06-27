class Token {
    // How will you differentiate between token objects? How can you use the Player ID to create a token identifier?
    // How will you keep track of which player an individual token belongs to?
    // How will you know if a token has been played or not?

    constructor(index, owner) {
        this.owner = owner; 
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false; 
    }

    
}