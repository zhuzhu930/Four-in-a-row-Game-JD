class Space {
    //only x and y are passed in, other properties are not.
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        //id is used in CSS to style the space.
        this.id = `space-${x}-${y}`; 
        this.token = null; 
    }
}