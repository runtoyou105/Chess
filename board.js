class Board {
    /**
     * @type {Board}
     */
    static instance = null;

    constructor() {
        /**
         *
         * @type {Piece[]}
         */
        this.pieces = [];

        /**
         *
         * @type {Potential[]}
         */
        this.potentials = [];

        /**
         *
         * @type {Piece[]}
         */
        this.dangerous = [];

        /**
         * @type {Element}
         */
        this.element = document.querySelector('.chs');

        /**
         * @type {Piece}
         */
        this.activePiece = null;

        this.turn = 'green'; // red
    }

    addPiece(piece){
        if(this.pieces[piece.location.toString()]){
            throw new Error("This location already used");
        }

        if(piece instanceof Potential){
            this.potentials.push(piece);
        }else
            this.pieces[piece.location.toString()] = piece;

        var element = piece.refreshElement();
        this.element.appendChild(element);
    }

    addDangerous(piece){
        this.dangerous.push(piece);
    }

    clearDangerous(){
        for(var i = 0; i < this.dangerous.length; ++i){
            this.dangerous[i].dangerous = false;
            this.dangerous[i].refreshElement();
        }

        this.dangerous = [];
    }

    removePotentials(){
        for(var i = 0; i < this.potentials.length; ++i){
            this.potentials[i].remove();
        }

        this.potentials = [];
    }

    /**
     *
     * @returns Board
     */
    static getInstance(){
        if(!Board.instance){
            Board.instance = new Board();
        }

        return Board.instance;
    }

    moveElement(){
        if(board.activePiece){
            this.activePiece.location=new this.getPieceByLocation(location);
        }
    }

    /**
     *
     * @param location
     * @returns Piece|null
     */
     getPieceByLocation(location){
        var string = location.toString();
        return  this.pieces[string];
    }

    render(){
        var cont = document.querySelector('.cont')
        var bg = document.querySelector('.bg')
        var sqs = []
        for (var y = 0; y < 9; y++) {
            var row = document.createElement('div')
            row.classList.add('row')
            sqs[y] = row
            for (var x = 0; x < 8; x++) {
                var sq = document.createElement('div')
                sq.classList.add('sq')
                sqs[y][x] = sq
                row.appendChild(sq)
            }
            bg.appendChild(row)
        }
        var rows = document.querySelectorAll('.row')
        rows[4].classList.add('middle')
        sqs[1][4].classList.add('cross')
        sqs[8][4].classList.add('cross')
        var mks = [
            [2, 1], [2, 7],
            [3, 0], [3, 2], [3, 4], [3, 6], [3, 8],
            [6, 0], [6, 2], [6, 4], [6, 6], [6, 8],
            [7, 1], [7, 7]
        ]
        for (var i = 0; i < mks.length; i++) {
            var mk = document.createElement('div')
            mk.classList.add('mk')
            mk.style.top = (mks[i][0] * sg + ssb) + 'px'
            mk.style.left = (mks[i][1] * sg + ssb) + 'px'
            bg.appendChild(mk)
        }
    }
}
