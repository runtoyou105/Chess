class Cannon extends Piece {

    constructor(location, color) {
        super(location, color);
        this.name = '砲';
    }

    hint() {
        var board = Board.getInstance();
        var origin = this.location;
        var directions = [[0,1], [0, -1], [-1,0], [1,0]];

        for (var i = 0; i < directions.length; ++i) {
            var location = new Location(origin.x, origin.y);

            var flagOver = false;
            while (true) {
                location.x += directions[i][0];
                location.y += directions[i][1];

                if (location.inBoard()) {

                    var piece = board.getPieceByLocation(location);
                    //cho trong
                    if (!piece) {
                        if (flagOver) {
                            continue;
                        }

                        var potential = new Potential(location, this.color);
                        board.addPiece(potential);
                    } else {
                        if (!flagOver)
                            flagOver = true;
                        else if (piece.color !== this.color) {
                            board.addDangerous(piece);
                            piece.dangerous = true;
                            piece.refreshElement();
                            break;
                        } else
                            break;
                    }
                } else
                    break;
            }
        }
    }
}
