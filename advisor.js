class Advisor extends Piece {

    constructor(location, color) {
        super(location, color);
        this.name = '仕';
    }
    hint() {
        var board = Board.getInstance();
        var origin = this.location;
        if(this.color === 'green')
            var points = [[4, 1], [3, 2], [5, 2], [5,0], [3,0]];
        else
            var points = [ [3, 9] , [5, 9], [4, 8], [3, 7], [5, 7]];

        for (var i = 0; i < points.length; ++i) {
            var location = new Location(points[i][0], points[i][1]);
            if (Math.abs(location.x - origin.x) > 1 || Math.abs(location.y - origin.y) > 1)
                continue;

            var midle = new Location((location.x + origin.x) /2, (location.y + origin.y) /2);
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
