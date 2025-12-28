// Diccionario de palabras con pistas y orientación
const diccionario = [
  { palabra: "AMOR", orientacion: "H", pista: "Sentimiento intenso de afecto" },
  { palabra: "MAR", orientacion: "H", pista: "Masa de agua salada" },
  { palabra: "MAL", orientacion: "H", pista: "Opuesto al bien" },
  { palabra: "CASA", orientacion: "H", pista: "Vivienda humana" },
  { palabra: "SOL", orientacion: "H", pista: "Estrella central del sistema solar" },
  { palabra: "FLOR", orientacion: "H", pista: "Estructura reproductiva de las plantas" },
  { palabra: "CIELO", orientacion: "H", pista: "Espacio sobre la tierra" },
  { palabra: "PAN", orientacion: "H", pista: "Alimento básico hecho de harina" },
  { palabra: "AZUL", orientacion: "H", pista: "Color del cielo y el mar" },
  { palabra: "ROSA", orientacion: "H", pista: "Flor de color y aroma" },
  { palabra: "AGUA", orientacion: "H", pista: "Líquido esencial para la vida" },
  { palabra: "FUEGO", orientacion: "H", pista: "Reacción química con luz y calor" },
  { palabra: "TIERRA", orientacion: "H", pista: "Planeta donde vivimos" },
  { palabra: "AIRE", orientacion: "H", pista: "Mezcla de gases que respiramos" },
  { palabra: "VIDA", orientacion: "H", pista: "Condición de nacer, crecer y morir" },
  { palabra: "MUNDO", orientacion: "H", pista: "Conjunto de todas las cosas" },
  { palabra: "LUZ", orientacion: "H", pista: "Radiación que permite ver" },
  { palabra: "NOCHE", orientacion: "H", pista: "Periodo de oscuridad diaria" },
  { palabra: "DIA", orientacion: "H", pista: "Periodo de luz solar" },
  { palabra: "TIEMPO", orientacion: "H", pista: "Medida de duración de eventos" },
  { palabra: "LIBRO", orientacion: "H", pista: "Conjunto de hojas escritas" },
  { palabra: "PUEBLO", orientacion: "H", pista: "Comunidad de personas" },
  { palabra: "CIUDAD", orientacion: "H", pista: "Centro urbano grande" },
  { palabra: "CAMINO", orientacion: "H", pista: "Vía para ir de un lugar a otro" },
  { palabra: "PUENTE", orientacion: "H", pista: "Estructura para cruzar un obstáculo" },
  { palabra: "MESA", orientacion: "H", pista: "Mueble con superficie plana" },
  { palabra: "SILLA", orientacion: "H", pista: "Asiento con respaldo" },
  { palabra: "CAMA", orientacion: "H", pista: "Mueble para dormir" },
  { palabra: "COCINA", orientacion: "H", pista: "Lugar donde se prepara comida" },
  { palabra: "BAÑO", orientacion: "H", pista: "Habitación con inodoro y ducha" }
];

// Estado del juego
let estadoJuego = {
  cuadricula: [],
  ancho: 10,
  alto: 10,
  palabrasColocadas: [],
  letrasIngresadas: {},
  palabrasCompletadas: {},
  palabraActual: null
};

// Direcciones
const DIRECCION = {
  HORIZONTAL: 'H',
  VERTICAL: 'V'
};

// Inicializar juego al cargar
document.addEventListener('DOMContentLoaded', () => {
  inicializarJuego();
});

function inicializarJuego() {
  // Generar crucigrama
  generarAutodefinido(estadoJuego.ancho, estadoJuego.alto);
  
  // Renderizar
  renderizarCrucigrama();
  renderizarPistas();
  
  // Configurar eventos
  configurarEventos();
}

// ============================================
// ALGORITMO DE BACKTRACKING PARA GENERACIÓN
// ============================================

let intentosGeneracion = 0;
const MAX_INTENTOS_GENERACION = 10;

function generarAutodefinido(ancho, alto) {
  // Incrementar contador de intentos
  intentosGeneracion++;
  
  // Verificar límite de intentos para evitar ciclos infinitos
  if (intentosGeneracion > MAX_INTENTOS_GENERACION) {
    intentosGeneracion = 0;
    console.error('No se pudo generar un crucigrama válido después de varios intentos');
    // Generar crucigrama con una sola palabra en el centro como fallback
    generarCrucigramaSimple(ancho, alto);
    return;
  }
  
  // Inicializar cuadrícula vacía
  estadoJuego.cuadricula = Array(alto).fill(null).map(() => Array(ancho).fill(''));
  estadoJuego.palabrasColocadas = [];
  estadoJuego.letrasIngresadas = {};
  estadoJuego.palabrasCompletadas = {};
  
  // Ordenar palabras por longitud (descendente) y mezclarlas aleatoriamente
  let palabrasOrdenadas = [...diccionario].sort((a, b) => b.palabra.length - a.palabra.length);
  
  // Mezclar palabras del mismo largo para variedad
  palabrasOrdenadas = mezclarArray(palabrasOrdenadas);
  
  // Intentar colocar palabras con backtracking
  const resultado = backtrack(palabrasOrdenadas, 0);
  
  if (!resultado) {
    // Si falla, intentar de nuevo con palabras aleatorias
    generarAutodefinido(ancho, alto);
  } else {
    // Éxito - resetear contador
    intentosGeneracion = 0;
  }
}

function generarCrucigramaSimple(ancho, alto) {
  // Fallback: colocar una sola palabra en el centro
  estadoJuego.cuadricula = Array(alto).fill(null).map(() => Array(ancho).fill(''));
  estadoJuego.palabrasColocadas = [];
  estadoJuego.letrasIngresadas = {};
  estadoJuego.palabrasCompletadas = {};
  
  // Seleccionar una palabra que quepa en el centro
  const centroFila = Math.floor(alto / 2);
  const centroCol = Math.floor(ancho / 2);
  
  // Buscar la palabra más larga que quepa
  for (const palabraInfo of diccionario) {
    if (palabraInfo.palabra.length <= ancho) {
      colocarPalabra(palabraInfo, centroFila, centroCol, DIRECCION.HORIZONTAL);
      break;
    }
  }
}

function mezclarArray(array) {
  const nuevoArray = [...array];
  for (let i = nuevoArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
  }
  return nuevoArray;
}

function backtrack(palabras, indice) {
  // Caso base: todas las palabras colocadas o no hay más palabras
  if (indice >= palabras.length) {
    return true;
  }
  
  const palabraInfo = palabras[indice];
  const palabra = palabraInfo.palabra;
  
  // Intentar colocar la palabra
  const posiciones = encontrarPosicionesDisponibles(palabra);
  
  for (const posicion of posiciones) {
    if (colocarPalabra(palabraInfo, posicion.fila, posicion.columna, posicion.direccion)) {
      // Recursión
      if (backtrack(palabras, indice + 1)) {
        return true;
      }
      // Backtracking: remover la palabra
      removerPalabra(palabraInfo, posicion.fila, posicion.columna, posicion.direccion);
    }
  }
  
  // Si no se puede colocar esta palabra, saltar a la siguiente
  if (backtrack(palabras, indice + 1)) {
    return true;
  }
  
  return false;
}

function encontrarPosicionesDisponibles(palabra) {
  const posiciones = [];
  const longitud = palabra.length;
  
  // Si es la primera palabra, colocar en el centro
  if (estadoJuego.palabrasColocadas.length === 0) {
    const centroFila = Math.floor(estadoJuego.alto / 2);
    const centroCol = Math.floor(estadoJuego.ancho / 2);
    
    // Intentar horizontal en el centro
    if (centroCol + longitud <= estadoJuego.ancho) {
      posiciones.push({
        fila: centroFila,
        columna: centroCol,
        direccion: DIRECCION.HORIZONTAL
      });
    }
    
    return posiciones;
  }
  
  // Para las siguientes palabras, buscar intersecciones
  const intersecciones = encontrarIntersecciones(palabra);
  
  if (intersecciones.length > 0) {
    return intersecciones;
  }
  
  // Si no hay intersecciones, buscar posición libre
  const libres = encontrarPosicionesLibres(palabra);
  return libres;
}

function encontrarIntersecciones(palabra) {
  const posiciones = [];
  
  for (const colocada of estadoJuego.palabrasColocadas) {
    const palabraColocada = colocada.palabra;
    
    // Buscar letras comunes
    for (let i = 0; i < palabra.length; i++) {
      for (let j = 0; j < palabraColocada.length; j++) {
        if (palabra[i] === palabraColocada[j]) {
          // Encontrada una letra común
          const filaBase = colocada.fila + (colocada.direccion === DIRECCION.VERTICAL ? j : 0);
          const colBase = colocada.columna + (colocada.direccion === DIRECCION.HORIZONTAL ? j : 0);
          
          // Intentar colocar perpendicularmente
          if (colocada.direccion === DIRECCION.HORIZONTAL) {
            // Intentar vertical - verificar límites primero
            const nuevaFila = filaBase - i;
            if (nuevaFila >= 0 && nuevaFila + palabra.length <= estadoJuego.alto) {
              if (puedeColocarVertical(palabra, nuevaFila, colBase)) {
                posiciones.push({
                  fila: nuevaFila,
                  columna: colBase,
                  direccion: DIRECCION.VERTICAL
                });
              }
            }
          } else {
            // Intentar horizontal - verificar límites primero
            const nuevaColumna = colBase - i;
            if (nuevaColumna >= 0 && nuevaColumna + palabra.length <= estadoJuego.ancho) {
              if (puedeColocarHorizontal(palabra, filaBase, nuevaColumna)) {
                posiciones.push({
                  fila: filaBase,
                  columna: nuevaColumna,
                  direccion: DIRECCION.HORIZONTAL
                });
              }
            }
          }
        }
      }
    }
  }
  
  return posiciones;
}

function encontrarPosicionesLibres(palabra) {
  const posiciones = [];
  const longitud = palabra.length;
  
  for (let fila = 0; fila < estadoJuego.alto; fila++) {
    for (let col = 0; col < estadoJuego.ancho; col++) {
      // Intentar horizontal
      if (col + longitud <= estadoJuego.ancho && puedeColocarHorizontal(palabra, fila, col)) {
        posiciones.push({
          fila: fila,
          columna: col,
          direccion: DIRECCION.HORIZONTAL
        });
      }
      
      // Intentar vertical
      if (fila + longitud <= estadoJuego.alto && puedeColocarVertical(palabra, fila, col)) {
        posiciones.push({
          fila: fila,
          columna: col,
          direccion: DIRECCION.VERTICAL
        });
      }
    }
  }
  
  // Ordenar posiciones aleatoriamente para variedad
  return posiciones.sort(() => Math.random() - 0.5).slice(0, 10);
}

function puedeColocarHorizontal(palabra, fila, columna) {
  const longitud = palabra.length;
  
  // Verificar límites
  if (columna + longitud > estadoJuego.ancho) return false;
  
  for (let i = 0; i < longitud; i++) {
    const col = columna + i;
    const valorActual = estadoJuego.cuadricula[fila][col];
    
    // Si la celda está ocupada con otra letra
    if (valorActual !== '' && valorActual !== palabra[i]) {
      return false;
    }
    
    // Verificar celdas adyacentes (arriba y abajo)
    if (valorActual === '') {
      if (fila > 0 && estadoJuego.cuadricula[fila - 1][col] !== '') {
        return false;
      }
      if (fila < estadoJuego.alto - 1 && estadoJuego.cuadricula[fila + 1][col] !== '') {
        return false;
      }
    }
  }
  
  // Verificar celdas antes y después
  if (columna > 0 && estadoJuego.cuadricula[fila][columna - 1] !== '') {
    return false;
  }
  if (columna + longitud < estadoJuego.ancho && estadoJuego.cuadricula[fila][columna + longitud] !== '') {
    return false;
  }
  
  return true;
}

function puedeColocarVertical(palabra, fila, columna) {
  const longitud = palabra.length;
  
  // Verificar límites
  if (fila + longitud > estadoJuego.alto) return false;
  
  for (let i = 0; i < longitud; i++) {
    const f = fila + i;
    const valorActual = estadoJuego.cuadricula[f][columna];
    
    // Si la celda está ocupada con otra letra
    if (valorActual !== '' && valorActual !== palabra[i]) {
      return false;
    }
    
    // Verificar celdas adyacentes (izquierda y derecha)
    if (valorActual === '') {
      if (columna > 0 && estadoJuego.cuadricula[f][columna - 1] !== '') {
        return false;
      }
      if (columna < estadoJuego.ancho - 1 && estadoJuego.cuadricula[f][columna + 1] !== '') {
        return false;
      }
    }
  }
  
  // Verificar celdas antes y después
  if (fila > 0 && estadoJuego.cuadricula[fila - 1][columna] !== '') {
    return false;
  }
  if (fila + longitud < estadoJuego.alto && estadoJuego.cuadricula[fila + longitud][columna] !== '') {
    return false;
  }
  
  return true;
}

function colocarPalabra(palabraInfo, fila, columna, direccion) {
  const palabra = palabraInfo.palabra;
  
  // Verificar si se puede colocar
  if (direccion === DIRECCION.HORIZONTAL) {
    if (!puedeColocarHorizontal(palabra, fila, columna)) return false;
  } else {
    if (!puedeColocarVertical(palabra, fila, columna)) return false;
  }
  
  // Colocar la palabra
  for (let i = 0; i < palabra.length; i++) {
    if (direccion === DIRECCION.HORIZONTAL) {
      estadoJuego.cuadricula[fila][columna + i] = palabra[i];
    } else {
      estadoJuego.cuadricula[fila + i][columna] = palabra[i];
    }
  }
  
  // Guardar información de la palabra
  estadoJuego.palabrasColocadas.push({
    palabra: palabra,
    pista: palabraInfo.pista,
    fila: fila,
    columna: columna,
    direccion: direccion,
    id: estadoJuego.palabrasColocadas.length
  });
  
  return true;
}

function removerPalabra(palabraInfo, fila, columna, direccion) {
  const palabra = palabraInfo.palabra;
  
  // Remover solo las letras que no son intersecciones
  for (let i = 0; i < palabra.length; i++) {
    let f, c;
    if (direccion === DIRECCION.HORIZONTAL) {
      f = fila;
      c = columna + i;
    } else {
      f = fila + i;
      c = columna;
    }
    
    // Verificar si esta letra es usada por otra palabra
    let esInterseccion = false;
    for (const otra of estadoJuego.palabrasColocadas) {
      if (otra.id === estadoJuego.palabrasColocadas[estadoJuego.palabrasColocadas.length - 1].id) continue;
      
      for (let j = 0; j < otra.palabra.length; j++) {
        let of, oc;
        if (otra.direccion === DIRECCION.HORIZONTAL) {
          of = otra.fila;
          oc = otra.columna + j;
        } else {
          of = otra.fila + j;
          oc = otra.columna;
        }
        
        if (of === f && oc === c) {
          esInterseccion = true;
          break;
        }
      }
      if (esInterseccion) break;
    }
    
    if (!esInterseccion) {
      estadoJuego.cuadricula[f][c] = '';
    }
  }
  
  // Remover de palabras colocadas
  estadoJuego.palabrasColocadas.pop();
}

// ============================================
// RENDERIZADO
// ============================================

function renderizarCrucigrama() {
  const crucigrama = document.getElementById('crucigrama');
  crucigrama.innerHTML = '';
  
  // Configurar grid CSS
  crucigrama.style.gridTemplateColumns = `repeat(${estadoJuego.ancho}, 1fr)`;
  crucigrama.style.gridTemplateRows = `repeat(${estadoJuego.alto}, 1fr)`;
  
  for (let fila = 0; fila < estadoJuego.alto; fila++) {
    for (let col = 0; col < estadoJuego.ancho; col++) {
      const celda = document.createElement('div');
      celda.className = 'celda';
      celda.dataset.fila = fila;
      celda.dataset.columna = col;
      
      if (estadoJuego.cuadricula[fila][col] !== '') {
        celda.classList.add('letra');
        celda.id = `celda-${fila}-${col}`;
        
        // Verificar si hay letra ingresada
        const clave = `${fila}-${col}`;
        if (estadoJuego.letrasIngresadas[clave]) {
          celda.textContent = estadoJuego.letrasIngresadas[clave];
          celda.classList.add('letra-ingresada');
        }
      }
      
      crucigrama.appendChild(celda);
    }
  }
}

function renderizarPistas() {
  // Obtener elementos del layout panorámico
  const pistasHorizontales = document.getElementById('pistas-horizontales');
  const pistasVerticales = document.getElementById('pistas-verticales');
  
  // Obtener elementos de las pestañas móviles
  const pistasHorizontalesMobile = document.getElementById('pistas-horizontales-mobile');
  const pistasVerticalesMobile = document.getElementById('pistas-verticales-mobile');
  
  // Limpiar todas las listas
  if (pistasHorizontales) pistasHorizontales.innerHTML = '';
  if (pistasVerticales) pistasVerticales.innerHTML = '';
  if (pistasHorizontalesMobile) pistasHorizontalesMobile.innerHTML = '';
  if (pistasVerticalesMobile) pistasVerticalesMobile.innerHTML = '';
  
  // Obtener palabras únicas por dirección
  const horizontales = estadoJuego.palabrasColocadas.filter(p => p.direccion === DIRECCION.HORIZONTAL);
  const verticales = estadoJuego.palabrasColocadas.filter(p => p.direccion === DIRECCION.VERTICAL);
  
  // Ordenar por posición
  horizontales.sort((a, b) => (a.fila * estadoJuego.ancho + a.columna) - (b.fila * estadoJuego.ancho + b.columna));
  verticales.sort((a, b) => (a.fila * estadoJuego.alto + a.columna) - (b.fila * estadoJuego.alto + b.columna));
  
  // Función auxiliar para renderizar en una lista
  const renderizarEnLista = (palabras, lista) => {
    if (!lista) return;
    palabras.forEach(palabra => {
      const li = document.createElement('li');
      const btn = crearBotonPista(palabra);
      li.appendChild(btn);
      lista.appendChild(li);
    });
  };
  
  // Renderizar horizontales en ambos lugares
  renderizarEnLista(horizontales, pistasHorizontales);
  renderizarEnLista(horizontales, pistasHorizontalesMobile);
  
  // Renderizar verticales en ambos lugares
  renderizarEnLista(verticales, pistasVerticales);
  renderizarEnLista(verticales, pistasVerticalesMobile);
}

function crearBotonPista(palabraInfo) {
  const btn = document.createElement('button');
  btn.className = 'pista-btn';
  btn.textContent = palabraInfo.pista;
  btn.dataset.id = palabraInfo.id;
  
  // Aplicar estado si existe
  if (estadoJuego.palabrasCompletadas[palabraInfo.id]) {
    if (estadoJuego.palabrasCompletadas[palabraInfo.id] === 'correcta') {
      btn.classList.add('completada-correcta');
    } else {
      btn.classList.add('completada-incorrecta');
    }
  } else if (tieneLetrasIngresadas(palabraInfo)) {
    btn.classList.add('en-progreso');
  }
  
  btn.addEventListener('click', () => abrirModalEntrada(palabraInfo));
  
  return btn;
}

function tieneLetrasIngresadas(palabraInfo) {
  for (let i = 0; i < palabraInfo.palabra.length; i++) {
    let f, c;
    if (palabraInfo.direccion === DIRECCION.HORIZONTAL) {
      f = palabraInfo.fila;
      c = palabraInfo.columna + i;
    } else {
      f = palabraInfo.fila + i;
      c = palabraInfo.columna;
    }
    
    const clave = `${f}-${c}`;
    if (estadoJuego.letrasIngresadas[clave]) {
      return true;
    }
  }
  return false;
}

// ============================================
// MODAL DE ENTRADA
// ============================================

function abrirModalEntrada(palabraInfo) {
  estadoJuego.palabraActual = palabraInfo;
  
  const modal = document.getElementById('modal-entrada');
  const titulo = document.getElementById('modal-titulo');
  const pista = document.getElementById('modal-pista');
  const cuadros = document.getElementById('modal-cuadros');
  
  titulo.textContent = palabraInfo.direccion === DIRECCION.HORIZONTAL ? 'Horizontal' : 'Vertical';
  pista.textContent = palabraInfo.pista;
  cuadros.innerHTML = '';
  
  // Crear cuadros para cada letra
  const palabra = palabraInfo.palabra;
  for (let i = 0; i < palabra.length; i++) {
    const cuadro = document.createElement('input');
    cuadro.type = 'text';
    cuadro.maxLength = 1;
    cuadro.className = 'cuadro-letra';
    cuadro.dataset.indice = i;
    
    // Calcular posición en la cuadrícula
    let f, c;
    if (palabraInfo.direccion === DIRECCION.HORIZONTAL) {
      f = palabraInfo.fila;
      c = palabraInfo.columna + i;
    } else {
      f = palabraInfo.fila + i;
      c = palabraInfo.columna;
    }
    
    const clave = `${f}-${c}`;
    
    // Verificar si ya hay letra ingresada o si es intersección
    if (estadoJuego.letrasIngresadas[clave]) {
      cuadro.value = estadoJuego.letrasIngresadas[clave];
    }
    
    // Configurar eventos
    cuadro.addEventListener('input', (e) => {
      e.target.value = e.target.value.toUpperCase();
      // Solo avanzar al siguiente cuadro si acabamos de escribir una letra nueva
      if (e.target.value.length === 1 && e.inputType !== 'deleteContentBackward') {
        const siguiente = cuadro.nextElementSibling;
        if (siguiente && !siguiente.disabled) {
          siguiente.focus();
        }
      }
    });
    
    cuadro.addEventListener('keydown', (e) => {
      // Guardar con Enter
      if (e.key === 'Enter') {
        e.preventDefault();
        guardarLetrasModal();
        return;
      }
      
      // Backspace: mover al anterior si está vacío
      if (e.key === 'Backspace' && cuadro.value === '') {
        const anterior = cuadro.previousElementSibling;
        if (anterior && !anterior.disabled) {
          anterior.focus();
        }
      }
      
      // Flecha derecha: mover al siguiente
      if (e.key === 'ArrowRight') {
        const siguiente = cuadro.nextElementSibling;
        if (siguiente && !siguiente.disabled) {
          siguiente.focus();
          e.preventDefault();
        }
      }
      
      // Flecha izquierda: mover al anterior
      if (e.key === 'ArrowLeft') {
        const anterior = cuadro.previousElementSibling;
        if (anterior && !anterior.disabled) {
          anterior.focus();
          e.preventDefault();
        }
      }
    });
    
    // Forzar avanzar al siguiente cuadro al hacer focus en uno con valor
    cuadro.addEventListener('focus', (e) => {
      // Si el cuadro ya tiene valor y es el primero o no fue focuseado por el usuario,
      // intentar avanzar al siguiente vacío
      if (cuadro.value.length === 1) {
        setTimeout(() => {
          if (cuadro.value.length === 1 && document.activeElement === cuadro) {
            const siguiente = cuadro.nextElementSibling;
            if (siguiente && !siguiente.disabled && siguiente.value === '') {
              siguiente.focus();
            }
          }
        }, 10);
      }
    });
    
    cuadros.appendChild(cuadro);
  }
  
  modal.classList.add('active');
  
  // Focus en el primer cuadro vacío
  setTimeout(() => {
    const primerVacio = Array.from(cuadros.children).find(c => c.value === '' && !c.disabled);
    if (primerVacio) {
      primerVacio.focus();
    }
  }, 100);
}

function cerrarModal() {
  const modal = document.getElementById('modal-entrada');
  modal.classList.remove('active');
  estadoJuego.palabraActual = null;
}

function guardarLetrasModal() {
  if (!estadoJuego.palabraActual) return;
  
  const palabraInfo = estadoJuego.palabraActual;
  const cuadros = document.querySelectorAll('#modal-cuadros .cuadro-letra');
  
  // Guardar letras ingresadas
  cuadros.forEach((cuadro, i) => {
    let f, c;
    if (palabraInfo.direccion === DIRECCION.HORIZONTAL) {
      f = palabraInfo.fila;
      c = palabraInfo.columna + i;
    } else {
      f = palabraInfo.fila + i;
      c = palabraInfo.columna;
    }
    
    const clave = `${f}-${c}`;
    const valor = cuadro.value.toUpperCase();
    
    if (valor) {
      estadoJuego.letrasIngresadas[clave] = valor;
    } else {
      delete estadoJuego.letrasIngresadas[clave];
    }
  });
  
  cerrarModal();
  renderizarCrucigrama();
  renderizarPistas();
}

// ============================================
// VALIDACIÓN
// ============================================

function verificarTodo() {
  let todoCorrecto = true;
  
  for (const palabraInfo of estadoJuego.palabrasColocadas) {
    const resultado = verificarPalabra(palabraInfo);
    
    if (resultado !== 'correcta') {
      todoCorrecto = false;
    }
    
    estadoJuego.palabrasCompletadas[palabraInfo.id] = resultado;
  }
  
  renderizarCrucigrama();
  renderizarPistas();
  
  if (todoCorrecto) {
    alert('¡Felicidades! Has completado correctamente todas las palabras.');
  }
}

function verificarPalabra(palabraInfo) {
  const palabraEsperada = palabraInfo.palabra;
  let palabraIngresada = '';
  let todasCompletadas = true;
  
  // Obtener palabra ingresada
  for (let i = 0; i < palabraEsperada.length; i++) {
    let f, c;
    if (palabraInfo.direccion === DIRECCION.HORIZONTAL) {
      f = palabraInfo.fila;
      c = palabraInfo.columna + i;
    } else {
      f = palabraInfo.fila + i;
      c = palabraInfo.columna;
    }
    
    const clave = `${f}-${c}`;
    const letra = estadoJuego.letrasIngresadas[clave];
    
    if (!letra) {
      todasCompletadas = false;
      break;
    }
    
    palabraIngresada += letra;
  }
  
  if (!todasCompletadas) {
    return 'incompleta';
  }
  
  // Verificar si es correcta
  if (palabraIngresada === palabraEsperada) {
    // Marcar celdas como correctas
    for (let i = 0; i < palabraEsperada.length; i++) {
      let f, c;
      if (palabraInfo.direccion === DIRECCION.HORIZONTAL) {
        f = palabraInfo.fila;
        c = palabraInfo.columna + i;
      } else {
        f = palabraInfo.fila + i;
        c = palabraInfo.columna;
      }
      
      const celda = document.getElementById(`celda-${f}-${c}`);
      if (celda) {
        celda.classList.add('correcta');
        celda.classList.remove('incorrecta');
      }
    }
    
    return 'correcta';
  } else {
    // Marcar celdas como incorrectas
    for (let i = 0; i < palabraEsperada.length; i++) {
      let f, c;
      if (palabraInfo.direccion === DIRECCION.HORIZONTAL) {
        f = palabraInfo.fila;
        c = palabraInfo.columna + i;
      } else {
        f = palabraInfo.fila + i;
        c = palabraInfo.columna;
      }
      
      const celda = document.getElementById(`celda-${f}-${c}`);
      if (celda) {
        celda.classList.add('incorrecta');
        celda.classList.remove('correcta');
      }
    }
    
    return 'incorrecta';
  }
}

// ============================================
// EVENTOS
// ============================================

function configurarEventos() {
  // Modal
  document.getElementById('modal-cerrar').addEventListener('click', cerrarModal);
  document.getElementById('modal-cancelar').addEventListener('click', cerrarModal);
  document.getElementById('modal-guardar').addEventListener('click', guardarLetrasModal);
  
  // Cerrar modal al hacer clic fuera
  document.getElementById('modal-entrada').addEventListener('click', (e) => {
    if (e.target.id === 'modal-entrada') {
      cerrarModal();
    }
  });
  
  // Botones de control
  document.getElementById('btn-verificar').addEventListener('click', verificarTodo);
  document.getElementById('btn-reiniciar').addEventListener('click', () => {
    if (confirm('¿Seguro que quieres empezar un nuevo juego?')) {
      inicializarJuego();
    }
  });
  
  // Tecla Escape para cerrar modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarModal();
    }
  });
  
  // Pestañas móviles
  configurarPestanas();
}

// ============================================
// PESTAÑAS MÓVILES
// ============================================

function configurarPestanas() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabId = e.target.dataset.tab;
      cambiarPestana(tabId);
    });
  });
}

function cambiarPestana(tabId) {
  // Remover clase active de todos los botones y paneles
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  
  // Agregar clase active al botón y panel seleccionados
  const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  const tabPane = document.getElementById(`tab-${tabId}`);
  
  if (tabBtn) {
    tabBtn.classList.add('active');
  }
  
  if (tabPane) {
    tabPane.classList.add('active');
  }
}
