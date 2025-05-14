function obtenerEleccionComputadora() {
  const opciones = ["piedra", "papel", "tijera"];
  const indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

function jugarRonda(jugador, computadora) {
  if (jugador === computadora) {
    return "¡Empate!";
  }

  if (
    (jugador === "piedra" && computadora === "tijera") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "tijera" && computadora === "papel")
  ) {
    return `Ganaste 🎉 ${jugador} vence a ${computadora}`;
  } else {
    return `Perdiste 😢 ${computadora} vence a ${jugador}`;
  }
}

function jugar(eleccionJugador) {
  const computadora = obtenerEleccionComputadora();
  const resultado = jugarRonda(eleccionJugador, computadora);
  document.getElementById("resultado").innerText = 
    `Tú elegiste: ${eleccionJugador}\nLa computadora eligió: ${computadora}\n${resultado}`;
}
