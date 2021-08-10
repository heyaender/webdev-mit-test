//Create keyboard row arrays
var baris1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var baris2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var baris3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
var baris4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

var allBaris = baris1.concat(baris2).concat(baris3).concat(baris4);
var outputtedText = [];
var charactersPlaceInArray;

function TransformedText() {
    this.horizontalFlipValue = [];
    this.verticalFlipValue = [];
    this.linearShiftValue = [];
}

// Horizontal
TransformedText.prototype.horizontalFlip = function (outputtedText) {
    this.horizontalFlipValue = [];
    for (var i = 0; i < outputtedText.length; i++) {
        if ($.inArray(outputtedText[i], baris1) != -1) {
            charactersPlaceInArray = baris1.indexOf(outputtedText[i], baris1);
            this.horizontalFlipValue.push(baris1[(baris1.length - 1) - charactersPlaceInArray]);
        } else if ($.inArray(outputtedText[i], baris2) != -1) {
            charactersPlaceInArray = baris2.indexOf(outputtedText[i], baris2);
            this.horizontalFlipValue.push(baris2[(baris2.length - 1) - charactersPlaceInArray]);
        } else if ($.inArray(outputtedText[i], baris3) != -1) {
            charactersPlaceInArray = baris3.indexOf(outputtedText[i], baris3);
            this.horizontalFlipValue.push(baris3[(baris3.length - 1) - charactersPlaceInArray]);
        } else if ($.inArray(outputtedText[i], baris4) != -1) {
            charactersPlaceInArray = baris4.indexOf(outputtedText[i], baris4);
            this.horizontalFlipValue.push(baris4[(baris4.length - 1) - charactersPlaceInArray]);
        } else {
            this.horizontalFlipValue.push(outputtedText[i]);
        }
    }
    outputtedText = this.horizontalFlipValue;
}

//Vertical
TransformedText.prototype.verticalFlip = function (outputtedText) {
    this.verticalFlipValue = [];
    for (var i = 0; i < outputtedText.length; i++) {
        if ($.inArray(outputtedText[i], baris1) != -1) {
            charactersPlaceInArray = baris1.indexOf(outputtedText[i], baris1);
            this.verticalFlipValue.push(baris4[charactersPlaceInArray]);
        } else if ($.inArray(outputtedText[i], baris2) != -1) {
            charactersPlaceInArray = baris2.indexOf(outputtedText[i], baris2);
            this.verticalFlipValue.push(baris3[charactersPlaceInArray]);
        } else if ($.inArray(outputtedText[i], baris3) != -1) {
            charactersPlaceInArray = baris3.indexOf(outputtedText[i], baris3);
            this.verticalFlipValue.push(baris2[charactersPlaceInArray]);
        } else if ($.inArray(outputtedText[i], baris4) != -1) {
            charactersPlaceInArray = baris4.indexOf(outputtedText[i], baris4);
            this.verticalFlipValue.push(baris1[charactersPlaceInArray]);
        } else {
            this.verticalFlipValue.push(outputtedText[i]);
        }
    }
    outputtedText = this.verticalFlipValue;
}

//Shift
TransformedText.prototype.linearShift = function (outputtedText, linearShiftValue) {
    this.linearShiftValue = [];
    for (var i = 0; i < outputtedText.length; i++) {
        if ($.inArray(outputtedText[i], allBaris) != -1) {
            charactersPlaceInArray = allBaris.indexOf(outputtedText[i], allBaris);
            if (linearShiftValue < 0 || linearShiftValue === 0) {
                if ((linearShiftValue % 40) === 0) {
                    this.linearShiftValue.push(allBaris[charactersPlaceInArray]);
                } else {

                    if ((charactersPlaceInArray + (linearShiftValue % 40)) < 0) {
                        this.linearShiftValue.push(allBaris[allBaris.length + (charactersPlaceInArray + (linearShiftValue % 40))]);
                    } else {
                        this.linearShiftValue.push(allBaris[charactersPlaceInArray + (linearShiftValue % 40)]);
                    }
                }
            } else if (linearShiftValue > 0) {
                this.linearShiftValue.push(allBaris[(charactersPlaceInArray + (linearShiftValue % 40)) % 40]);
            }
        } else {
            this.linearShiftValue.push(outputtedText[i]);
        }
    }
    outputtedText = this.linearShiftValue;
}