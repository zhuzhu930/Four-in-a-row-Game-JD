class Board {
    // static set the rows and columns, no params are passed in.
    constructor() {
        this.rows = 6;
        this.columns = 7; 
        this.spaces = this.createSpaces(); 
    }

    createSpaces() {
        // generate a 2D array of spaces
        // return an array of space objects.

        const spaces = [];

        for(let x = 0; x < this.columns; x++) {
            const column = [];
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                column.push(space);
            }
            
            spaces.push(column);
        }

        return spaces; 
    }
}