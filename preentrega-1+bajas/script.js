function calcularNotaFinal(notasExamenes, notasPracticas) {
  var promedioExamenes =
    notasExamenes.reduce((a, b) => a + b, 0) / notasExamenes.length;

  var sumaPracticas = notasPracticas.reduce((a, b) => a + b, 0);

  var notaFinal = (promedioExamenes + sumaPracticas) / 2;

  return notaFinal.toFixed(2);
}

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var notasExamenes = [
      parseFloat(document.getElementById("notasExamenes").value),
    ];
    var notasPracticas = [
      parseFloat(document.getElementById("notasPracticas").value),
    ];

    document.getElementById("notaFinal").innerText = calcularNotaFinal(
      notasExamenes,
      notasPracticas
    );
    document.getElementById("resultado").style.display = "block";
  });
