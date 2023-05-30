class Horse extends Piece {

    constructor(location, color) {
        super(location, color);
        this.name = '马';
    }

    hint() {
        var origin = this.location;

        var options = [[2,1], [2, -1], [-2 , 1], [-2, -1], [1,2], [1,-2], [-1,2], [-1,-2] ];
        for (var i = 0; i < options.length; ++i){
            var option = options[i];
            var location = new Location(origin.x + option[0], origin.y + option[1]);

            if(Math.abs(option[0]) > Math.abs(option[1])){
                location = new Location(origin.x + option[0]/2, origin.y);
            }else {
                location = new Location(origin.x, origin.y + option[1]/2);
            }

            if(!Board.getInstance().getPieceByLocation(location))
                this.checkPotential(new Location(origin.x + option[0], origin.y + option[1]));
        }
    }
}
