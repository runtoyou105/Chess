class Potential extends Piece {

    constructor(location, color) {
        super(location, color);
        this.name = '';
    }

    refreshElement(){
        var element = super.refreshElement();
        element.classList.add('potential');

        var pixel = this.location.toPixel(true);
        element.style.top = pixel.top + 'px';
        element.style.left =  pixel.left + 'px';

        return element;
    }
}
