const notas = {
    bimestre1: 7.0,
    bimestre2: 3.7,
    bimestre3: 6.4,
    bimestre4: 8.6
}

var soma = 0;
var media = 0;
var i = 0;

for(let bimestres in notas){
    soma += notas[bimestres];
    i= i+1
}

media = soma/i

if(media <= 7){
     console.log(`O aluno(a) não foi aprovado(a) com a nota 
     ${media.toFixed(2)}.`);
} else {console.log("O aluno(a) foi aprovado(a)!")}


