function exchange() {
  var name = document.getElementById("name").value;
  var valueInDollar = document.getElementById("value").value;
  var dollarPrice = 5.1;

  var valueInReal = valueInDollar * dollarPrice;
  valueInReal = valueInReal.toFixed(2);
  valueInDollar = Number.parseFloat(valueInDollar);
  valueInDollar = valueInDollar.toFixed(2);
  if (!isNaN(valueInDollar)) {
    alert(`Olá ${name}, $${valueInDollar} são equivalentes a R$${valueInReal}`);
  } else {
    alert("Por favor, preencha o campo com o valor desejado..");
  }
}

function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("value").value = "";
}
