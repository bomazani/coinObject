



var coin = {
    state: 0,

    flip: function () {
        const coinTossResult = Math.floor(Math.random() * 2);
        // randomly set this.state to be either 0 or 1
        if (coinTossResult === 0) {
            this.state = coinTossResult;
        } else {
            this.state = coinTossResult;
        }
       
    },


    toString: function () {
        // return “H” or “T” depending on whether this.state is 0 or 1
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }

    },


    toHTML: function () {
        var img = document.createElement("img");
        // set the properties of the image element to show either heads or tails
        if (this.state === 0) {

            img.src = "goYenFront.png";
        } else {
            img.src = "goYenBack.png";;
        }
        return img;
    }

}

for (let i = 0; i<20; i++) {
coin.flip();

var tossResultString = coin.toString();
var resultString = document.createElement("div");
var tossResult = document.createTextNode("Result: " + tossResultString + ", ");
resultString.appendChild(tossResult);
document.getElementById("displayString").appendChild(resultString);

var tossResultImage = coin.toHTML();
var resultImage = document.createElement("div");
resultImage.appendChild(tossResultImage);
document.getElementById("displayString").appendChild(resultImage);

}
