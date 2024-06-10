let movies = ["Avnegers", "Pushpa-2","Spiderman","Animal", "Kalki","Pushpa", "Venom"]

//Print all the movies except kalki

for (let i = 0; i <= movies.length - 1; i++) {
    if (movies[i]=="Kalki" || movies[i]=="Spiderman") {
        continue;
    }
    console.log(movies[i]);
 }