class Piece {
    //location
    //name
    //active
    //color
    //direction
    // color

    constructor(location, color) {
        this.name = '';
        this.location = location;
        this.color = color;
        this.active = false;
        this.dangerous = false;

        this.element = document.createElement('span');
        this.element.addEventListener('click', function (){ //lắng nghe lệnh
            this.active = true;
            this.refreshElement();  //làm mới con trỏ

            var board = Board.getInstance();
            if(board.activePiece) {
                board.activePiece.active = false;
                board.activePiece.refreshElement();  // làm mới laại board
            }

            board.activePiece = this;
            board.removePotentials();
            board.clearDangerous();

            this.hint();
        }.bind(this));
    }

    moveElements(location){
        this.element = document.createElement('span');
        this.element.addEventListener('click', function (){
            this.active = true;
            this.refreshElement();

            var board = Board.getInstance();
            if(board.activePiece) {
                board.activePiece.active = true;
                piece.activePiece.location= new location();
                board.activePiece.refreshElement();
            }

            board.activePiece = this;
            board.removePotentials();
            board.clearDangerous();

            this.hint();
        }.bind(this));
        // move piece can be use
        // var board = Board.getInstance();
        // var origin = this.location;
        // if(this.color === 'green')
        //     var points = [[3, 1], [3, 2], [3,0],[4, 1],[4, 0],[4, 2], [5, 2],[5,1], [5,0],];
        // else
        //     var points = [[3, 9],[3, 7],[3, 8] ,[4, 7],[4, 8],[4, 9], [5, 9], [5 ,8], [5, 7],];
        //
        // for (var i = 0; i < points.length; ++i) {
        //     var location = new Location(points[i][0], points[i][1]);
        //     if (Math.abs(location.x - origin.x) === 1 || Math.abs(location.y - origin.y) === 1)
        //
        //         origin.x += 1;
        //     if (!this.checkPotential(location))
        //         break;
        // origin.x += 1;
    }


    refreshElement(){
        this.element.textContent = this.name;
        this.element.classList.add('ch', this.color);

        if(this.active){
            this.element.classList.add('active');
        }else {
            this.element.classList.remove('active');
        }

        if(this.dangerous){
            this.element.classList.add('dangerous');
        }else {
            this.element.classList.remove('dangerous');
        }

        var pixel = this.location.toPixel();
        this.element.style.top = pixel.top + 'px';
        this.element.style.left =  pixel.left + 'px';

        return this.element;
    }

    checkPotential(location){
        if(location.inBoard()){
            var piece = Board.getInstance().getPieceByLocation(location);
            if(piece){
                if (piece.color !== this.color){
                    piece.dangerous = true;
                    piece.refreshElement();
                }

                return false;
            }


            var potential = new Potential(location.clone(), this.color);
            Board.getInstance().addPiece(potential);

            return potential;
        }

        return false;
    }

    hint(){
        throw new Error('need implement');
    }

    remove(){
        this.element.parentNode.removeChild(this.element);
    }
}
