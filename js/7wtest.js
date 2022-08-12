// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log(" 1  =====================================")
let a = 0;
let b = 0;

function lyginimas(a,b) {

    if (a > b)  {

        console.log(a)
    }
    else if ( b > a)  {

        console.log(b)
    }
    else { console.log(a,b) }

}
lyginimas( 5, 12)



// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

console.log(" 2  =====================================")

for (i=1; i<11; i++) {

    console.log(i)
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

console.log(" 3  =====================================")

for (j=0; j<12; j+=2) {

    console.log(j)
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

console.log(" 4  =====================================")


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max - 1);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let atsitiktinis = 0;
for (n=0; n<5; n++) {

    atsitiktinis = rand(1, 10);
    console.log('atsitiknis :' + atsitiktinis);
}


// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

console.log(" 5  =====================================")

let u = 0;
while (u != 5) {

    u = rand(1, 10);
    console.log(u)
}



// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

console.log(" 6  =====================================")


const size = rand(10, 30);

let add = 0;
for (let w = 0; w < size; w++) {
    let arr = [...Array(rand(20, 30))].map(_ => rand(10, 30));
    add = arr;
    
}
console.log(add)


// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

console.log(" 7  =====================================")

let add1 = '';
const letters = "ABCD"
for (let q = 0; q < size; q++) {
    let arr1 = [...Array(100)].map(_ => (letters[Math.floor(Math.random() * letters.length)]));
    add1 = arr1;

    
}
console.log(add1)



// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

console.log(" 8  =====================================")

function lygineSuma(d,f) {

    if (Number.isInteger(d,f)) {

        return (console.log('skaiciu suma: ' + (d + f)));
    }
    else if ((Array.isArray(d)) && (Array.isArray(d)))
    console.log('kintamieji yra masyvai');




}

lygineSuma([8, 6, 7],[2, 8, 19])



// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

console.log(" 9  =====================================")


let r = 0;
let pirminis = true;

function pirminisSkaicius(r) {
    if (Number.isInteger(r)) {

      if (r === 1) {
          console.log("skaicius yra nei pirminis nei nepirminis");
      }

      else if (r > 1) {
      
          for (let t = 2; t < r; t++) {
              if (r % t == 0) {
                  pirminis = false;
                  break;
              }
          }
      
          if (pirminis) {
              console.log(`${r} yra pirminis`);
          } else {
              console.log(`${r} nera pirminis`);
          }
      }
      
      else {
          console.log("skaicius nera pirminis");
      }

    }
  }
pirminisSkaicius(rand(1,21));





// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

