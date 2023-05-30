var sg = 64 // 64
var sb = sg / 16 // 4
var ssb = sb / 2 // 2

class Location {
    //location
    //name
    //active
    //color
    //direction

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    en(n){
        return n * sg + ssb
    }

    de(v){
        return (v - ssb) / sg
    }

    toPixel(isSmall){
        return {
            top: this.en(this.y) + (isSmall? 12 : 0),
            left: this.en(this.x)  + (isSmall? 11 : 0)
        }
    }

    inBoard(){
        return this.x >=0 && this.x <=8 && this.y >=0 && this.y <=9;
    }

    clone(){
        return new Location(this.x, this.y);
    }

    toString(){
        return this.x + ":" + this.y;
    }
}
