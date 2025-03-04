// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text:"I gotta figure out where Mommy keeps the dynamite", "time": 29 },
    { text:"I'll get some measuring tape, so I can time it right", "time": 35 },
    { text:"I know it's dangerous, I know you're thinking I am a fool", "time": 42 },
    { text:"But it's the only chance I'll ever get to look so cool", "time": 48 },
    { text:"Look so cool", "time": 53 },
    { text:"Hey, look at me", "time": 55 },
    { text:"Casually walking away", "time": 57 },
    { text:"Like action movie hero boy!", "time": 59 },
    { text:"In slo-mo", "time": 62 },
    { text:"Everything glowing and blowing to bits right behind me!", "time": 63 },
    { text:"You see it all the time in theaters on the silver screen", "time": 82 },
    { text:"Like when the good guy blows the bad guy's house to smithereens", "time": 88 },
    { text:"I got a movie making camera and a dozen grenades", "time": 95 },
    { text:"I'm looking tough, I got the stuff, I got the spiffy shades!", "time": 102 },
    { text:"Spiffy shades", "time": 105 },
    { text:"Hey, look at me", "time": 108 },
    { text:"Casually walking away", "time": 110 },
    { text:"Like action movie hero boy!", "time": 112 },
    { text:"In slo-mo", "time": 115 },
    { text:"Everything glowing and blowing to bits right behind me!", "time": 116 },
    { text:"I am aware it's just a movie", "time": 136 },
    { text:"I'm aware it's a cliché", "time": 139 },
    { text:"I am aware I'm being stupid", "time": 142 },
    { text:"I'm aware of that, but hey", "time": 145 },
    { text:"This is just something I gotta do, yeah!", "time": 149 },
    { text:"Hey, look at me", "time": 174 },
    { text:"Casually stumbling down", "time": 176 },
    { text:"Like action movie blooper reel!", "time": 179 },
    { text:"In slo-mo", "time": 181 },
    { text:"Everything glowing and blowing to bits, including me!", "time": 183 }
  ];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);