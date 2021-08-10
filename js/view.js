$(document).ready(function () {
  $("form#text-input-form").submit(function (event) {
    event.preventDefault();

    var inputtedText = $("textarea#text-to-change").val();
    var transformationValues = $("input#tranformation-values").val().toUpperCase().replace(/\s/g, "").split(",");

    outputtedText = inputtedText.toLowerCase().split(''); //Convert all uppercase letters to lowercase & split by character

    var newTransformedText = new TransformedText(outputtedText);

    for (var i = 0; i < transformationValues.length; i++) {
      if (transformationValues[i] === "H") {
        newTransformedText.horizontalFlip(outputtedText);
        outputtedText = newTransformedText.horizontalFlipValue;
      } else if (transformationValues[i] === "V") {
        newTransformedText.verticalFlip(outputtedText);
        outputtedText = newTransformedText.verticalFlipValue;
      } else {
        var linearShiftValue = parseInt(transformationValues[i]); //Convert linear shift value to number
        newTransformedText.linearShift(outputtedText, linearShiftValue);
        outputtedText = newTransformedText.linearShiftValue;
      }
    }

    $("#output-text").html(outputtedText.join("").replace(/(\r|\n)/g, "<br />")); //Remove commas in final array & keep initial indents/paragraph spacing
  });
});