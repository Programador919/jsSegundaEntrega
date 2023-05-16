// crear, eliminar lista de personas identificadas por nombre y apellido

const Persona = function (name, lastName) {
  this.name = name;
  this.lastName = lastName;
};

let personaOne = new Persona("DAVID GEREMIAS", "SUBIETA");

const individuos = [
  personaOne,
  { name: "DANIELA", lastName: "GARCIA" },
  { name: "ESMERALDA", lastName: "GAMA" },
  { name: "ERIKA", lastName: "GOMEZ" },
  { name: "ANA", lastName: "TORRES" },
  { name: "LUIS DAVID", lastName: "VASQUEZ" },
];

function incluirIndividuo() {
  let name = prompt("Ingresa nombres del nuevo individuo : ")
    .toUpperCase()
    .trim();
  let lastName = prompt("Ingresa apellidos del nuevo individuo : ")
    .toUpperCase()
    .trim();
  if (name === "" || lastName === "") {
  }
  let persona = new Persona(name, lastName);
  if (individuos.some((sujeto) => sujeto.name === persona.name)) {
    alert("El nombre ya se encuentra registrado");
    return;
  }
  individuos.unshift(persona);
  console.table(individuos);
}

console.log(incluirIndividuo());

let eliminar = prompt(
  "Verifique la informacion ingresada si cometio un error, puede eliminarlo solo ESCRIBA eliminar, de lo contrario no escriba nada y presione en aceptar"
);

if (eliminar) {
  individuos.shift();
} else {
  alert("No se elimino el ultimo registro");
}

console.table(individuos);



let posicion = prompt(
  "Indique el nombre  para saber si esta registrado").trim().toUpperCase();
const filtro = individuos.filter((fil) => fil.name.toUpperCase().includes(posicion));
console.table(filtro);