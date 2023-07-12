//Arreglo-info
const koders = [
  {
    name: "Arnold",
    generation: 11,
    age: 19,
    signatures: [
      {
        module: "JS",
        average: 9,
      },
      {
        module: "HTML",
        average: 9,
      },
      {
        module: "React",
        average: 10,
      },
    ],
  },
  {
    name: "Gelga",
    generation: 12,
    age: 17,
    signatures: [
      {
        module: "JS",
        average: 4,
      },
      {
        module: "HTML",
        average: 6,
      },
      {
        module: "React",
        average: 6,
      },
    ],
  },
  {
    name: "Gerald",
    generation: 12,
    age: 20,
    signatures: [
      {
        module: "JS",
        average: 7,
      },
      {
        module: "HTML",
        average: 7,
      },
      {
        module: "React",
        average: 7,
      },
    ],
  },
];
const buildCard = () => {
  // Crear elementos
  const card = document.createElement("div");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("h2");
  const generation = document.createElement("h3");
  const age = document.createElement("p");
  const signatures = document.createElement("h4");

  // Introducir-estructurar elementos.
  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(generation);
  info.appendChild(age);
  info.appendChild(signatures);
  document.body.appendChild(card);

  //Asignar clases a los elementos
  card.className = "card";
  info.className = "info";

  //Agregar contenido a los elementos
  img.src = "https://randomuser.me/api/portraits/lego/3.jpg";
  img.widht = 150;
  name.textContent = "Nombre";
  generation.textContent = "Generación";
  age.textContent = "Edad";
  signatures.textContent = "Asignatura";

  buildCard();
};
