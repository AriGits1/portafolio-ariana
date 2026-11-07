// Las rutas relativas a BASE_URL funcionan también en /nombre-repositorio/.
export const imageUrl = (file) => `${import.meta.env.BASE_URL}images/${file}`;

// El primer elemento de images es la portada. Los demás forman la galería.
// Para añadir proyectos basta agregar objetos con esta misma estructura.
export const projects = [
  {
    id: 'trafico', featured: true,
    category: 'MACHINE LEARNING · APLICACIÓN',
    title: 'Análisis inteligente de tráfico urbano',
    text: 'De un video de tráfico a información útil: detección, conteo de vehículos y recomendaciones para entender la movilidad urbana.',
    tech: ['Python', 'YOLOv8', 'ByteTrack', 'Streamlit', 'Ollama · LLaMA 3.2'],
    team: 'Proyecto grupal · UNI', people: 'Dery Gonzales, Ariana Mercado y Mathias Vilca.', peopleLabel: 'Integrantes',
    problem: 'Analizar el flujo vehicular de un video para identificar patrones de congestión urbana.',
    solution: 'Una aplicación que detecta y cuenta vehículos, presenta métricas y genera recomendaciones a partir del análisis del video.',
    results: 'En el video de demostración se identificaron 171 vehículos únicos. El mayor nivel de congestión se registró entre los segundos 95 y 100. Estos datos corresponden a esa demostración.',
    link: 'https://github.com/MathiasVilca/sist-analisis-trafico-humano.git',
    images: [
      { file: 'trafico/deteccion.png', alt: 'Aplicación de tráfico con vehículos detectados y sus identificadores sobre el video.', caption: 'Detección y seguimiento de vehículos.' },
      { file: 'trafico/distribucion.png', alt: 'Gráfico del flujo vehicular por segmentos de tiempo y tabla de distribución por tipo de vehículo.', caption: 'Flujo por segmentos y distribución por tipo de vehículo.' },
      { file: 'trafico/reporte.png', alt: 'Panel de la demostración con 171 vehículos únicos, segmento pico de 95 a 100 segundos y reporte generado.', caption: 'Métricas de la demostración y recomendaciones generadas.' },
    ],
  },
  {
    id: 'malware', category: 'CIBERSEGURIDAD · INVESTIGACIÓN',
    title: 'Detección de malware Android',
    text: 'Investigación individual que compara seis modelos de Machine Learning para detectar malware Android con CICMalDroid2020, incluyendo la técnica de Stacking.',
    tech: ['Machine Learning', 'CICMalDroid2020', 'Stacking'],
    team: 'Investigación individual', people: 'Ariana Mercado.', peopleLabel: 'Autora',
    problem: 'Comparar enfoques de Machine Learning para detectar malware en aplicaciones Android.',
    solution: 'Comparación de Decision Tree, Random Forest, Extra Trees, XGBoost, LightGBM y Stacking utilizando el dataset CICMalDroid2020. El diagrama documenta el flujo de preprocesamiento, modelado y evaluación.',
    results: 'Stacking obtuvo el mejor desempeño en mis experimentos entre los seis modelos comparados. La figura muestra el F1-score por clase de cada modelo y conserva los valores originales de la investigación.',
    images: [
      { file: 'malware/f1-modelos.png', alt: 'Mapa de calor con F1-score por clase y modelo: Adware, Banking, Riskware, Benign y SMS Malware.', caption: 'F1-score por clase y modelo, según la figura de la investigación.' },
      { file: 'malware/metodologia.png', alt: 'Diagrama de metodología con CICMalDroid2020, eliminación de duplicados, división estratificada, normalización, seis modelos y evaluación.', caption: 'Metodología de comparación de los seis modelos, incluido Stacking.' },
    ],
  },
  {
    id: 'robotica', category: 'ROBÓTICA · NAVEGACIÓN AUTÓNOMA',
    title: 'Navegación autónoma con ROS1',
    text: 'Planificación de rutas y evasión de obstáculos para que un robot explore y se desplace de forma autónoma.',
    tech: ['ROS1', 'JetAuto Pro', 'LIDAR', 'RViz'], team: 'Proyecto de robótica · UNI',
    problem: 'Desplazar un robot de forma autónoma en un entorno con obstáculos.',
    solution: 'Navegación con JetAuto Pro y ROS1, utilizando LIDAR, visualización en RViz, planificación de rutas y evasión de obstáculos.',
    results: 'Las imágenes muestran el robot en el circuito, el mapa en RViz y la visualización de una ruta. El proyecto obtuvo el primer lugar en el Autonomous Navigation Kit de la UNI, en diciembre de 2024.',
    images: [
      { file: 'robotica/robot.png', alt: 'Robot JetAuto Pro en un circuito con obstáculos y vías señalizadas.', caption: 'JetAuto Pro en el circuito de navegación.' },
      { file: 'robotica/rviz.png', alt: 'Interfaz RViz con el mapa del circuito y la visualización del robot y del escáner láser.', caption: 'Mapa del entorno y visualización en RViz.' },
      { file: 'robotica/ruta.png', alt: 'Mapa de navegación con zonas de coste alrededor de obstáculos y una trayectoria visible.', caption: 'Visualización de la ruta y el entorno con obstáculos.' },
    ],
  },
];
