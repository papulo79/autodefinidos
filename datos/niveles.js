// ============================================
// NIVELES TEMÁTICOS
// ============================================

const niveles = [
  {
    id: 1,
    tema: "Naturaleza",
    palabras: [
      { palabra: "AMOR", orientacion: "H", pista: "Sentimiento intenso de afecto" },
      { palabra: "MAR", orientacion: "H", pista: "Masa de agua salada" },
      { palabra: "SOL", orientacion: "H", pista: "Estrella central del sistema solar" },
      { palabra: "FLOR", orientacion: "H", pista: "Estructura reproductiva de las plantas" },
      { palabra: "CIELO", orientacion: "H", pista: "Espacio sobre la tierra" },
      { palabra: "AGUA", orientacion: "H", pista: "Líquido esencial para la vida" },
      { palabra: "FUEGO", orientacion: "H", pista: "Reacción química con luz y calor" },
      { palabra: "TIERRA", orientacion: "H", pista: "Planeta donde vivimos" },
      { palabra: "AIRE", orientacion: "H", pista: "Mezcla de gases que respiramos" },
      { palabra: "VIDA", orientacion: "H", pista: "Condición de nacer, crecer y morir" },
      { palabra: "ARBOLES", orientacion: "H", pista: "Plantas grandes y leñosas" },
      { palabra: "MONTAÑA", orientacion: "H", pista: "Elevación grande del terreno" },
      { palabra: "RIO", orientacion: "H", pista: "Corriente de agua natural" },
      { palabra: "LUNA", orientacion: "H", pista: "Satélite natural de la Tierra" },
      { palabra: "NUBE", orientacion: "H", pista: "Masa visible de vapor en el cielo" },
      { palabra: "LLUVIA", orientacion: "H", pista: "Agua que cae de las nubes" },
      { palabra: "VIENTO", orientacion: "H", pista: "Aire en movimiento" },
      { palabra: "PLAYA", orientacion: "H", pista: "Costa junto al mar" },
      { palabra: "ROCA", orientacion: "H", pista: "Piedra natural dura" },
      { palabra: "ARENA", orientacion: "H", pista: "Material fino de la playa" },
      { palabra: "JARDIN", orientacion: "H", pista: "Lugar con plantas y flores" },
      { palabra: "BOSQUE", orientacion: "H", pista: "Gran conjunto de árboles" },
      { palabra: "VALLE", orientacion: "H", pista: "Depresión entre montañas" },
      { palabra: "PRADERA", orientacion: "H", pista: "Terreno plano con hierba" },
      { palabra: "NATURALEZA", orientacion: "H", pista: "Conjunto de seres vivos y elementos" },
      { palabra: "ECOSISTEMA", orientacion: "H", pista: "Sistema biológico con interacciones" },
      { palabra: "AMBIENTE", orientacion: "H", pista: "Entorno que rodea a los seres" },
      { palabra: "CLIMA", orientacion: "H", pista: "Conjunto de condiciones atmosféricas" },
      { palabra: "ESTACION", orientacion: "H", pista: "Cada una de las cuatro divisiones del año" }
    ]
  },
  {
    id: 2,
    tema: "Tiempo y Espacio",
    palabras: [
      { palabra: "DIA", orientacion: "H", pista: "Periodo completo de veinticuatro horas que incluye luz y oscuridad" },
      { palabra: "NOCHE", orientacion: "H", pista: "Momento del día sin luz solar, asociado al descanso" },
      { palabra: "HORA", orientacion: "H", pista: "Unidad común para medir la duración de actividades diarias" },
      { palabra: "MINUTO", orientacion: "H", pista: "Fracción de una hora usada para medir tiempos cortos" },
      { palabra: "SEGUNDO", orientacion: "H", pista: "Unidad muy breve utilizada para medir acciones rápidas" },
      { palabra: "SEMANA", orientacion: "H", pista: "Conjunto de siete días que organiza trabajo y descanso" },
      { palabra: "MES", orientacion: "H", pista: "División del año que agrupa varios días consecutivos" },
      { palabra: "AÑO", orientacion: "H", pista: "Periodo completo que marca el ciclo de estaciones" },
      { palabra: "SIGLO", orientacion: "H", pista: "Conjunto de cien años usado para ubicar hechos históricos" },
      { palabra: "AYER", orientacion: "H", pista: "Día inmediatamente anterior al momento presente" },
      { palabra: "HOY", orientacion: "H", pista: "Día actual en el que suceden las acciones" },
      { palabra: "MAÑANA", orientacion: "H", pista: "Tiempo que sigue al día presente o primeras horas del día" },
      { palabra: "PASADO", orientacion: "H", pista: "Tiempo que ya ocurrió antes del momento actual" },
      { palabra: "FUTURO", orientacion: "H", pista: "Tiempo que aún no ha sucedido" },
      { palabra: "MUNDO", orientacion: "H", pista: "Lugar donde viven las personas y ocurren los hechos" },
      { palabra: "ESPACIO", orientacion: "H", pista: "Extensión donde se sitúan objetos, personas y movimientos" },
      { palabra: "LUGAR", orientacion: "H", pista: "Punto determinado donde ocurre algo" },
      { palabra: "DISTANCIA", orientacion: "H", pista: "Separación entre dos puntos en el espacio" },
      { palabra: "CAMINO", orientacion: "H", pista: "Trayecto que conecta un punto con otro" },
      { palabra: "RUMBO", orientacion: "H", pista: "Dirección que se sigue al desplazarse" },
      { palabra: "NORTE", orientacion: "H", pista: "Punto cardinal usado para orientarse en mapas" },
      { palabra: "SUR", orientacion: "H", pista: "Punto cardinal opuesto al norte" },
      { palabra: "ESTE", orientacion: "H", pista: "Dirección por donde sale el sol cada día" },
      { palabra: "OESTE", orientacion: "H", pista: "Dirección por donde se oculta el sol" },
      { palabra: "INICIO", orientacion: "H", pista: "Momento en que algo comienza" },
      { palabra: "FINAL", orientacion: "H", pista: "Momento en que algo termina" },
      { palabra: "DURACION", orientacion: "H", pista: "Tiempo que se mantiene una acción o evento" },
      { palabra: "RITMO", orientacion: "H", pista: "Forma regular en que se repite el tiempo" },
      { palabra: "LUZ", orientacion: "H", pista: "Elemento que permite ver durante el día" },
      { palabra: "SOMBRA", orientacion: "H", pista: "Zona oscura producida al bloquearse la luz" }
    ]
  },
  {
    id: 3,
    tema: "Casa y Hogar",
    palabras: [
      { palabra: "CASA", orientacion: "H", pista: "Vivienda humana" },
      { palabra: "PAN", orientacion: "H", pista: "Alimento básico hecho de harina" },
      { palabra: "MESA", orientacion: "H", pista: "Mueble con superficie plana" },
      { palabra: "SILLA", orientacion: "H", pista: "Asiento con respaldo" },
      { palabra: "CAMA", orientacion: "H", pista: "Mueble para dormir" },
      { palabra: "COCINA", orientacion: "H", pista: "Lugar donde se prepara comida" },
      { palabra: "BAÑO", orientacion: "H", pista: "Habitación con inodoro y ducha" },
      { palabra: "SALA", orientacion: "H", pista: "Habitación principal de la casa" },
      { palabra: "PUERTA", orientacion: "H", pista: "Abertura para entrar o salir" },
      { palabra: "VENTANA", orientacion: "H", pista: "Abertura con cristal en la pared" }
    ]
  },
  {
    id: 4,
    tema: "Transporte",
    palabras: [
      { palabra: "CAMINO", orientacion: "H", pista: "Vía para ir de un lugar a otro" },
      { palabra: "PUENTE", orientacion: "H", pista: "Estructura para cruzar un obstáculo" },
      { palabra: "AUTO", orientacion: "H", pista: "Vehículo automotor" },
      { palabra: "BICI", orientacion: "H", pista: "Vehículo de dos ruedas" },
      { palabra: "BUS", orientacion: "H", pista: "Vehículo de transporte público" },
      { palabra: "TREN", orientacion: "H", pista: "Vehículo sobre rieles" },
      { palabra: "BARCO", orientacion: "H", pista: "Vehículo que navega en el agua" },
      { palabra: "AVION", orientacion: "H", pista: "Vehículo que vuela" },
      { palabra: "CALLE", orientacion: "H", pista: "Vía urbana para vehículos" },
      { palabra: "ESTACION", orientacion: "H", pista: "Lugar donde paran vehículos" }
    ]
  },
  {
    id: 5,
    tema: "Arte y Cultura",
    palabras: [
      { palabra: "LIBRO", orientacion: "H", pista: "Conjunto de hojas escritas" },
      { palabra: "ARTE", orientacion: "H", pista: "Expresión humana creativa" },
      { palabra: "MUSICA", orientacion: "H", pista: "Arte de combinar sonidos" },
      { palabra: "DANZA", orientacion: "H", pista: "Arte de moverse con ritmo" },
      { palabra: "PINTURA", orientacion: "H", pista: "Arte de representar con colores" },
      { palabra: "TEATRO", orientacion: "H", pista: "Arte de representar obras" },
      { palabra: "POESIA", orientacion: "H", pista: "Arte de escribir en verso" },
      { palabra: "CUENTO", orientacion: "H", pista: "Narración breve de ficción" },
      { palabra: "LETRA", orientacion: "H", pista: "Símbolo gráfico de un sonido" },
      { palabra: "COLOR", orientacion: "H", pista: "Sensación visual producida por la luz" }
    ]
  },
  {
    id: 6,
    tema: "Comida",
    palabras: [
      { palabra: "AZUL", orientacion: "H", pista: "Color del cielo y el mar" },
      { palabra: "ROSA", orientacion: "H", pista: "Flor de color y aroma" },
      { palabra: "FRUTA", orientacion: "H", pista: "Producto comestible de las plantas" },
      { palabra: "VERDURA", orientacion: "H", pista: "Hortaliza comestible" },
      { palabra: "CARNE", orientacion: "H", pista: "Carne de animal" },
      { palabra: "PESCADO", orientacion: "H", pista: "Animal acuático comestible" },
      { palabra: "SOPA", orientacion: "H", pista: "Plato líquido" },
      { palabra: "PASTEL", orientacion: "H", pista: "Postre dulce horneado" },
      { palabra: "SAL", orientacion: "H", pista: "Condimento para sazonar" },
      { palabra: "AZUCAR", orientacion: "H", pista: "Edulcorante natural" }
    ]
  },
  {
    id: 7,
    tema: "Animales",
    palabras: [
      { palabra: "PERRO", orientacion: "H", pista: "Animal doméstico fiel" },
      { palabra: "GATO", orientacion: "H", pista: "Felino doméstico" },
      { palabra: "CABALLO", orientacion: "H", pista: "Animal equino" },
      { palabra: "VACA", orientacion: "H", pista: "Animal que da leche" },
      { palabra: "CERDO", orientacion: "H", pista: "Animal de granja" },
      { palabra: "OVEJA", orientacion: "H", pista: "Animal con lana" },
      { palabra: "GALLINA", orientacion: "H", pista: "Ave de granja" },
      { palabra: "PATO", orientacion: "H", pista: "Ave acuática" },
      { palabra: "CONEJO", orientacion: "H", pista: "Pequeño mamífero de orejas largas" },
      { palabra: "LEON", orientacion: "H", pista: "Rey de la selva" }
    ]
  },
  {
    id: 8,
    tema: "Partes del Cuerpo",
    palabras: [
      { palabra: "CABEZA", orientacion: "H", pista: "Parte superior del cuerpo" },
      { palabra: "OJO", orientacion: "H", pista: "Órgano de la visión" },
      { palabra: "NARIZ", orientacion: "H", pista: "Órgano del olfato" },
      { palabra: "BOCA", orientacion: "H", pista: "Abertura para comer y hablar" },
      { palabra: "MANO", orientacion: "H", pista: "Extremidad superior" },
      { palabra: "PIE", orientacion: "H", pista: "Extremidad inferior" },
      { palabra: "BRAZO", orientacion: "H", pista: "Miembro superior del cuerpo" },
      { palabra: "PIERNA", orientacion: "H", pista: "Miembro inferior del cuerpo" },
      { palabra: "CORAZON", orientacion: "H", pista: "Órgano vital que bombea sangre" },
      { palabra: "DIENTE", orientacion: "H", pista: "Pieza ósea en la boca" }
    ]
  },
  {
    id: 9,
    tema: "Ropa",
    palabras: [
      { palabra: "CAMISA", orientacion: "H", pista: "Prenda para el torso" },
      { palabra: "PANTALON", orientacion: "H", pista: "Prenda para las piernas" },
      { palabra: "ZAPATO", orientacion: "H", pista: "Calzado para los pies" },
      { palabra: "GORRA", orientacion: "H", pista: "Prenda para la cabeza" },
      { palabra: "GUANTE", orientacion: "H", pista: "Prenda para las manos" },
      { palabra: "CHAQUETA", orientacion: "H", pista: "Prenda abrigada" },
      { palabra: "VESTIDO", orientacion: "H", pista: "Prenda femenina completa" },
      { palabra: "CALCETIN", orientacion: "H", pista: "Prenda para el pie" },
      { palabra: "SOMBRERO", orientacion: "H", pista: "Prenda para proteger del sol" },
      { palabra: "BUFANDA", orientacion: "H", pista: "Prenda para el cuello" }
    ]
  },
  {
    id: 10,
    tema: "Nivel Maestro",
    palabras: [
      { palabra: "AMOR", orientacion: "H", pista: "Sentimiento intenso de afecto" },
      { palabra: "TIEMPO", orientacion: "H", pista: "Medida de duración de eventos" },
      { palabra: "LIBRO", orientacion: "H", pista: "Conjunto de hojas escritas" },
      { palabra: "CAMINO", orientacion: "H", pista: "Vía para ir de un lugar a otro" },
      { palabra: "CORAZON", orientacion: "H", pista: "Órgano vital que bombea sangre" },
      { palabra: "MUNDO", orientacion: "H", pista: "Conjunto de todas las cosas" },
      { palabra: "CIELO", orientacion: "H", pista: "Espacio sobre la tierra" },
      { palabra: "FUEGO", orientacion: "H", pista: "Reacción química con luz y calor" },
      { palabra: "VIDA", orientacion: "H", pista: "Condición de nacer, crecer y morir" },
      { palabra: "LUZ", orientacion: "H", pista: "Radiación que permite ver" },
      { palabra: "NOCTURNO", orientacion: "H", pista: "Relativo a la noche" },
      { palabra: "ETERNIDAD", orientacion: "H", pista: "Duración infinita" },
      { palabra: "FANTASIA", orientacion: "H", pista: "Imaginación sin límites" },
      { palabra: "POESIA", orientacion: "H", pista: "Arte de escribir en verso" },
      { palabra: "ABUNDANCIA", orientacion: "H", pista: "Gran cantidad de algo" }
    ]
  }
];
