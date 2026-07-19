let turno = "TaRdE";
let periodo = turno.toUpperCase();

switch (periodo) {
    case "tarde":
        console.log("Início às 12:00");
        break;

    case "Tarde":
        console.log("Início às 12:30");
        break;

    case "TARDE":
        console.log("Início às 13:00");
        break;

    default:
        console.log("Turno inválido");
}