//A partir deo array abaixo, coloque no ocnsole um os valores do tipo string desde array.


const dados =[123,"texto",true,"palavra",99,"JS"];
//valor esperado no console:
//"texto"
//"palavra"
//"JS"

for (let dado of dados) {
   // console.log(dado);
    if (typeof dado === "string") {
        console.log(dado);
    }
}