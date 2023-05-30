'use strict'

var board = Board.getInstance();
board.render();

var pieces  = {
    "0:0" : new Chariot(new Location(0, 0), 'green'),
    "8:0" : new Chariot(new Location(8, 0), 'green'),
    "1:0" : new Horse(new Location(1, 0), 'green'),
    "7:0" : new Horse(new Location(7, 0), 'green'),
    "2:0" :new Elephant(new Location(2, 0), 'green'),
    "6:0" :new Elephant(new Location(6, 0), 'green'),
    "3:0" :new Advisor(new Location(5, 2), 'green'),
    "5:0" :new Advisor(new Location(5, 0), 'green'),
    "4:0" :new General(new Location(4, 1), 'green'),
    "4:2" :new Cannon(new Location(1, 2), 'green'),
    "7:2" :new Cannon(new Location(7, 2), 'green'),
    "0:3" :new Soldier(new Location(0, 3), 'green'),
    "2:3" :new Soldier(new Location(2, 3), 'green'),
    "6:3" :new Soldier(new Location(6, 3), 'green'),
    "4:3" :new Soldier(new Location(4, 3), 'green'),
    "8:3" :new Soldier(new Location(8, 3), 'green'),

    "0:9" :new Chariot(new Location(0, 9), 'red'),
    "8:9" :new Chariot(new Location(8, 9), 'red'),
    "1:9" :new Horse(new Location(1, 9), 'red'),
    "7:9" :new Horse(new Location(7, 9), 'red'),
    "2:9" :new Elephant(new Location(2, 9), 'red'),
    "6:9" :new Elephant(new Location(6, 9), 'red'),
    "3:9" :new Advisor(new Location(3, 9), 'red'),
    "5:9" :new Advisor(new Location(5, 9), 'red'),
    "4:9" :new General(new Location(4, 9), 'red'),
    "1:7" :new Cannon(new Location(1, 7), 'red'),
    "7:7" :new Cannon(new Location(7, 7), 'red'),
    "0:6" :new Soldier(new Location(0, 6), 'red'),
    "2:6" :new Soldier(new Location(2, 6), 'red'),
    "6:6" :new Soldier(new Location(6, 6), 'red'),
    "4:6" :new Soldier(new Location(4, 6), 'red'),
    "8:6" :new Soldier(new Location(8, 6), 'red'),// new Potential(new Location(1,6), 'red'),
};

for (const location in pieces) {
    board.addPiece(pieces[location]);
}






