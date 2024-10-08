let nomedoHeroi = "Rafael"
let totalExperiencia = 6798

if(totalExperiencia <= 1000){
	totalExperiencia = "Ferro"
} else if (totalExperiencia <= 2000){
	totalExperiencia = "bronze"
} else if (totalExperiencia <= 5000){
	totalExperiencia = "Prata"
} else if (totalExperiencia <= 7000){
	totalExperiencia = "Ouro"
} else if (totalExperiencia <= 8000){
	totalExperiencia = "Platina"
} else if (totalExperiencia <= 9000){
	totalExperiencia = "Ascendente"
} else if (totalExperiencia <= 10000){
	totalExperiencia = "Imortal"
} else{
	totalExperiencia = "Radiante"
}

console.log("O Herói de nome " + nomedoHeroi, "e está no nível de " + totalExperiencia)
