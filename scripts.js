var dollarPrice;

function exchange() {
  fetch("http://economia.awesomeapi.com.br/json/last/USD")
    .then((result) => result.json())
    .then((data) => {
      dollarPrice = data.USDBRL.ask;
      dollarPrice = parseFloat(dollarPrice);
      dollarPrice = dollarPrice.toFixed(2);

      var name = document.getElementById("name").value;
      var valueInDollar = document.getElementById("value").value;

      var valueInReal = valueInDollar * dollarPrice;
      valueInReal = valueInReal.toFixed(2);
      valueInDollar = Number.parseFloat(valueInDollar);
      valueInDollar = valueInDollar.toFixed(2);
      if (!isNaN(valueInDollar)) {
        alert(
          `Olá ${name}, $${valueInDollar} são equivalentes a R$${valueInReal}`
        );
      } else {
        alert("Por favor, preencha o campo com o valor desejado..");
      }
    })
    .catch((err) => console.log(err));
}

function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("value").value = "";
}
