// acordeão
function toggleAccordiona() {
    var accordion = document.getElementById("myAccordiona");
    if (accordion.style.display === "block") {
        accordion.style.display = "none";
    } else {
        accordion.style.display = "block";
    }
}

// título responsivo

// document.addEventListener("DOMContentLoaded", function () {
//     // Função para atualizar o título
//     function atualizarTitulo(role) {
//       const tituloElement = document.getElementById("titulo");
//       tituloElement.textContent = `TESTANDO ${role} EM QA`; // Atualiza o conteúdo do título
//     }
  
//     // Adiciona um evento de clique a todas as roles
//     const roles = document.querySelectorAll(".seletor");
//     roles.forEach(function (role) {
//       role.addEventListener("click", function (event) {
//         const roleSelecionada = event.target.textContent; // Obtém o texto da role selecionada
//         atualizarTitulo(roleSelecionada); // Chama a função para atualizar o título
//       });
//     });
//   });



// código do ambiente
// let amb = document.querySelectorAll('.ElAmbiente')
// amb.forEach(function(elemento){
//     elemento.addEventListener("click", (e)=>{
//         let EventClick = e.target
//         let tituloElement = document.getElementById("titulo");
//         if(tituloElement.textContent.includes("QA")){
//             tituloElement.textContent = tituloElement.textContent.replace("QA", e.target.textContent)
//         }
//         if(tituloElement.textContent.includes("DEV")){
//             tituloElement.textContent = tituloElement.textContent.replace("DEV", e.target.textContent)
//         }
//         if(tituloElement.textContent.includes("PROD")){
//             tituloElement.textContent = tituloElement.textContent.replace("PROD", e.target.textContent)
//         }
// })
// })

// //array das roles
// const arrayRoles = ["ADMIN", "BUYER", "MANAGER", "AGENT", "EXTERNAL", "VENDOR", "OPERATOR", "ADM-OPERATOR", "MAN-OPERATOR", "LOGISTICS"]

// let roles = document.querySelectorAll('.seletor')
// for(let i = 0; i < arrayRoles.length; i++){
//     roles.forEach(function(elemento){
//         elemento.addEventListener("click", (e)=>{
//             let EventClick = e.target
//             let tituloElement = document.getElementById("titulo");
//             if(tituloElement.textContent.includes(arrayRoles[i])){
//                 tituloElement.textContent = tituloElement.textContent.replace("QA", e.target.textContent)
//             }
//     })
//     })
// }

// Código do ambiente
let amb = document.querySelectorAll('.ElAmbiente');
let selectedAmbiente = "QA"; // Valor inicial do ambiente selecionado

amb.forEach(function (elemento) {
  elemento.addEventListener("click", (e) => {
    let ambienteSelecionado = e.target.textContent;
    selectedAmbiente = ambienteSelecionado;

    atualizarTitulo(selectedAmbiente, selectedRole);
  });
});

// Array das roles
// const arrayRoles = [
//   "ADMIN",
//   "BUYER",
//   "MANAGER",
//   "AGENT",
//   "EXTERNAL",
//   "VENDOR",
//   "OPERATOR",
//   "ADM OPERATOR",
//   "MAN OPERATOR",
//   "LOGISTICS"
// ];

let roles = document.querySelectorAll('.seletor');
let selectedRole = "ADMIN"; // Valor inicial da role selecionada

// for (let i = 0; i < arrayRoles.length; i++) {
//   roles.forEach(function (elemento) {
//     elemento.addEventListener("click", (e) => {
//       let roleSelecionada = e.target.textContent;
//       selectedRole = roleSelecionada;

//       atualizarTitulo(selectedAmbiente, selectedRole);
//     });
//   });
// }

roles.forEach(function (elemento) {
  elemento.addEventListener("click", (e) => {
    let roleSelecionada = e.target.textContent;
    selectedRole = roleSelecionada;
  
    atualizarTitulo(selectedAmbiente, selectedRole);
  });
});

// Função para atualizar o título
function atualizarTitulo(ambiente, role) {
  const tituloElement = document.getElementById("titulo");
  tituloElement.textContent = `TESTANDO ${role} EM ${ambiente}`;
}

// Atualize o título com os valores iniciais
atualizarTitulo(selectedAmbiente, selectedRole);
