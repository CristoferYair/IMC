document.getElementById('imcForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const altura = parseFloat(document.getElementById('altura').value) / 100;
  // Convertir libras a kilogramos
  const pesoLb = parseFloat(document.getElementById('peso').value);
  const peso = pesoLb / 2.20462;
  const resultado = document.getElementById('resultado');

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    resultado.textContent = "Por favor, ingresa valores válidos.";
    resultado.className = "resultado bajo";
    resultado.classList.remove("oculto");
    return;
  }

  const imc = peso / (altura * altura);
  let mensaje = "";
  let clase = "";

  if (imc < 18.5) {
    mensaje = `Bajo peso (IMC: ${imc.toFixed(1)})`;
    clase = "bajo";
  } else if (imc < 24.9) {
    mensaje = `Peso normal (IMC: ${imc.toFixed(1)})`;
    clase = "normal";
  } else if (imc < 29.9) {
    mensaje = `Sobrepeso (IMC: ${imc.toFixed(1)})`;
    clase = "sobrepeso";
  } else {
    mensaje = `Obesidad (IMC: ${imc.toFixed(1)})`;
    clase = "obesidad";
  }

  resultado.textContent = mensaje;
  resultado.className = `resultado ${clase}`;
});
