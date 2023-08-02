const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// Función para convertir de Dólar a Yen
const fromDollarToYen = (amountInDollars) => {
    const exchangeRateDollarToYen = oneEuroIs["JPY"] / oneEuroIs["USD"]; // Obtener tasa de cambio de Dólar a Yen
    return amountInDollars * exchangeRateDollarToYen;
  };
  


  // Función para convertir de Yen a Libra Esterlina
  const fromYenToPound = (amountInYen) => {
    const exchangeRateYenToPound = oneEuroIs["GBP"] / oneEuroIs["JPY"]; // Obtener tasa de cambio de Yen a Libra Esterlina
    return amountInYen * exchangeRateYenToPound;
  };
  
  
  let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
  const amountInDollars = 100;
  const amountInEuros = 50;
  const amountInYen = 5000;
  
  const amountInYenConverted = fromDollarToYen(amountInDollars);
  const amountInDollarsConverted = fromEuroToDollar(amountInEuros);
  const amountInPounds = fromYenToPound(amountInYen);
  

  s = { sum , fromEuroToDollar};