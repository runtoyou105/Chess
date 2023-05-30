class Chariot extends Piece {
    //location
    //name
    //active
    //color
    //direction

    constructor(location, color) {
        super(location, color);
        this.name = '車';
    }

    hint() { 
        var origin = this.location;
        var location = new Location(origin.x, origin.y);
        while(true){
            location.y += 1;
            if(!this.checkPotential(location))
                break;
        }

        var location = new Location(origin.x, origin.y);
        while(true){
            location.y -= 1;
            if(!this.checkPotential(location))
                break;
        }

        var location = new Location(origin.x, origin.y);
        while(true){
            location.x -= 1;
            if(!this.checkPotential(location))
                break;
        }

        var location = new Location(origin.x, origin.y);
        while(true){
            location.x += 1;
            if(!this.checkPotential(location))
                break;
        }
    }
}
