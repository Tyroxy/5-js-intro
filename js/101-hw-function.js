/*
Funkcijos


Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus


1. Funkcija pavadinimu “tusciaFunkcija”:
   1. nepriima jokių kintamųjų
   2. neatlieka jokios vidinės logikos
   3. gražina boolean tipo reikšmę “false”
   4. TESTAS:
      1. console.log( tusciaFunkcija() );
      2. rezultatas: false

*/    

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());


console.log('*******************************');


/*

2. Funkcija pavadinimu “daugyba”:
   1. priima du skaičiaus tipo kintamuosius
   2. atskirame kintamajame įsimena sandaugos reikšmę
   3. gražina saudaugos rezultatą
   4. TESTAI:
      1. console.log( daugyba( skaicius1, skaicius2 ) );
      2. console.log( daugyba( skaicius3, skaicius2 ) );
      3. console.log( daugyba( skaicius1, skaicius3 ) );
      4. rezultatas: teisingos reikšmės;
*/


function daugyba(a, b) {


   if (typeof a === 'number') {
      return 'teisingos reiksmes'
   }
   if (typeof a !== 'number') {
      return 'neteisingos reiksmes'
   }

   const rez = a * b;
   return rez; 

}

const a = -1;
const b = 4;
const c = 5;

console.log(daugyba(a, b));
console.log(daugyba(c, b));
console.log(daugyba(a, c));


/*
3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
   1. priima vieną kintamąjį
   2. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
   3. priešingu atveju, funkcija tęsia darbą
   4. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
   5. gražina skaitmenų kiekį
   6. TESTAI:
      1. console.log( skaitmenuKiekisSkaiciuje( 5 ) );
         1. rezultatas: 1
      2. console.log( skaitmenuKiekisSkaiciuje( 781 ) );
         1. rezultatas: 3
      3. console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
         1. rezultatas: 11
      4. console.log( skaitmenuKiekisSkaiciuje( true ) );
         1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
      5. console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
         1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
      6. console.log( skaitmenuKiekisSkaiciuje( NaN ) );
         1. rezultatas: “Pateikta netinkamo tipo reikšmė.”


4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
   1. priima vieną kintamąjį
   2. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
   3. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
   4. priešingu atveju, funkcija tęsia darbą
   5. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
   6. gražina didžiausią surastą skaičių
   7. TESTAI:
      1. console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
         1. rezultatas: 1
      2. console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
         1. rezultatas: 3
      3. console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
         1. rezultatas: 78
      4. console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
         1. rezultatas: 69
      5. console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
         1. rezultatas: -1
      6. console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
         1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
      7. console.log( didziausiasSkaiciusSarase( [] ) );
         1. rezultatas: “Pateiktas sąrašas negali būti tuščias.”


5. Funkcija pavadinimu “isrinktiRaides”:
   1. priima du kintamuosius:
      1. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
      2. antrasis nurodo kas kelintą raidę išrinkti
   2. patikrinti, ar pirmasis kintamasis yra teksto tipo:
      1. jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
      2. priešingu atveju tęsiame darbą
   3. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
      1. jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
      2. priešingu atveju tęsiame darbą
   4. patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
      1. jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
      2. priešingu atveju tęsiame darbą
   5. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
      1. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
      2. priešingu atveju tęsiame darbą
   6. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
      1. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
      2. priešingu atveju tęsiame darbą
   7. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
   8. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
   9. gražina rezultatą
   10. TESTAI:
      1. console.log( isrinktiRaides( “abcdefg”, 2 ) );
         1. rezultatas: “bdf”
      2. console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
         1. rezultatas: “cfil”
      3. console.log( isrinktiRaides( “abc”, 0 ) );
         1. rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
      4. console.log( isrinktiRaides( “abc”, 4 ) );
         1. rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
      5. console.log( isrinktiRaides( 1561, 2 ) );
         1. rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”


6. Funkcija pavadinimu “dalyba”:
   1. turi priimti du kintamuosius
   2. reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
      1. esant blogoms sąlygoms, išvesti atitinkamą pranešimą
      2. esant geroms - tęsti darbą
   3. į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
      1. daliname pirmąjį skaičių iš antrojo
   4. gražinti suskaičiuotą reikšmę
   5. TESTAI:
      1. sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

*/






