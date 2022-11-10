const numbers = [2,4,8,16,32,64,128,256,512,1024,2048];
var soma = 0;

for (let i=1; i < numbers.length; i++){
    soma += numbers[i]
}
var media = soma/(numbers.length);

console.log(`O tamanho da lista 'numbers' é: 
${numbers.length}.`);
console.log(`A soma dos valores é de: ${soma}.`);
console.log(`E sua média é: ${media}.`);