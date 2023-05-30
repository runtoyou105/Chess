class General extends Piece {

    constructor(location, color) {
        super(location, color);
        this.name = '帅';
    }
    hint() {
        var board = Board.getInstance();
        var origin = this.location;
        if(this.color === 'green')
            var points = [[3, 1], [3, 2], [3,0],[4, 1],[4, 0],[4, 2], [5, 2],[5,1], [5,0],];
        else
            var points = [[3, 9],[3, 7],[3, 8] ,[4, 7],[4, 8],[4, 9], [5, 9], [5 ,8], [5, 7],];

        for (var i = 0; i < points.length; ++i) {
            var location = new Location(points[i][0], points[i][1]);
            var piece = board.getPieceByLocation(location);
            if (Math.abs(location.x - origin.x) <= 1 || Math.abs(location.y - origin.y) <= 1)
            {
                var temp = new Potential(location, this.color);
                board.addPiece(temp);

            }










        }//for


    }

}
