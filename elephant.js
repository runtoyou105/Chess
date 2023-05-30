class Elephant extends Piece {

    constructor(location, color) {
        super(location, color);
        this.name = '相';
    }
    hint() {
        var board = Board.getInstance();
        var origin = this.location;
        if(this.color === 'green')
            var points = [[0, 2], [2, 4], [4, 2], [4, 6], [8, 2], [2, 0], [6, 0]];
        else
            var points = [ [2, 9] , [6, 9], [0, 7], [8, 7], [2, 5], [6, 5], [4, 7]];


        for (var i = 0; i < points.length; ++i) {
            var location = new Location(points[i][0], points[i][1]);

            if (Math.abs(location.x - origin.x) > 2 || Math.abs(location.y - origin.y) > 2)
                continue;

            var midle = new Location((location.x + origin.x) / 2, (location.y + origin.y) / 2);
            if (board.getPieceByLocation(midle)) {
                continue;
            }

            var piece = board.getPieceByLocation(location);
            if (!piece) {
                var temp = new Potential(location, this.color);
                board.addPiece(temp);
            }
            }
        }

}
