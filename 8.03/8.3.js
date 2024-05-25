  function printNumbers() {
    var max = parseInt(document.getElementById("max").value);
    var min = parseInt(document.getElementById("min").value);

    if (isNaN(max) || isNaN(min) || max <= min) {
      alert("Please enter valid numbers. Max must be greater than min.");
      return;
    }

    var output = "";
    for (var i = min; i < max; i++) {
      output += i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
  }
