console.log('funguju!');
const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = [
  'Petr',
  'Jana',
  'Pavel',
  'Zuzana',
  'Eva',
  'Adam',
  'Onyx',
  'Alex',
];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];

// Pomocí metody filter získejte z pole numbers pouze ta čísla, která jsou sudá, a uložte je do proměnné evenNumbers. Vypište toto nové pole do konzole.
const eventNumbers = numbers.filter(cislo=>cislo %2===0);
console.log(eventNumbers);
  
// Pomocí metody filter získejte z pole persons pouze dospělé lidi a uložte je do proměnné adults. Vypište toto nové pole do konzole.
const adults = persons.filter(person=>person.age>=18);
console.log(adults);

// Pomocí metody map vydělte všecha čísla v poli numbers třemi a uložte je do proměnné dividedByThree. Vypište toto nové pole do konzole.
const dividedByThree = numbers.map(cislo=>cislo/3);
console.log(dividedByThree);

// Pomocí metody map převeďte všechna čísla z pole numbers na řetězce. Výsledek vypište do konzole.
console.log(numbers.map(cislo=>String(cislo)));

// Z pole persons pomocí metody map vytvořte pro každou osobu e-mail ve formátu petr@gmail.com a výsledek uložte do proměnné emails. Vypište toto nové pole do konzole.
const emails = persons.map(jmeno=>`${jmeno.name.toLowerCase()}@gmail.com`);
console.log(emails);

// Z pole persons pomocí metody map vytvořte pro každou osobu položku HTML seznamu ve formátu <li>Petr (16)</li> a výsledek uložte do proměnné list. Vypište toto nové pole do konzole.
const list = persons.map(person=>`<li>${person.name}(${person.age})</li>`);
console.log(list);

// Agregace
// zapni hlavu
// Použijte opět pole persons z předchozího cvičení.

// Pomocí metod map a join vytvořte z pole persons HTML seznam v následujícím formátu:

// <ul>
//   <li>Petr (16)</li>
//   <li>Jana (8)</li>
//   <!-- a tak dále... -->
// </ul>
const seznam =' <ul>'+ persons.map(person=>`<li>${person.name} (${person.age})</li> `).join('')+ '</ul>';
// Pomocí innerHTML vložte tento seznam do stránky.
const textElm = document.querySelector('.seznam');
textElm.innerHTML = seznam;

// Proveďte totéž jako v předchozím bodě, zobrazte však v seznamu pouze zletilé osoby.
const seznamDospeli =' <ul>'+ persons
.filter(person=>person.age>18)
.map(person=>`<li>${person.name} (${person.age})</li> `)
.join('')+ '</ul>';
const textElmDospeli = document.querySelector('.seznamDospeli');
textElmDospeli.innerHTML = seznamDospeli;


// Proveďte totéž jako v předchozím bodě, přidejte však do položky seznamu CSS třídu dle pohlaví dané osoby.
const seznamDospeliPohlavi =' <ul>'+ persons
.filter(person=>person.age>18)
.map(person=>
    { if (person.gender==='male' || person.gender==='female') {
        return(
            `<li class="${person.gender}">${person.name} (${person.age})</li> `
        )
     } else if(person.gender==='intersex'){
        return(
            `<li class="nonbinary">${person.name} (${person.age})</li> `
        )
     }
     else{
        return(
            `<li class="jina">${person.name} (${person.age})</li> `
        )
     }
    }
    )
.join('')+ '</ul>';
const textElmDospeliPohlavi = document.querySelector('.seznamDospeliPohlavi');
textElmDospeliPohlavi.innerHTML = seznamDospeliPohlavi;

// <li class="male">Petr (16)</li>
// U nebinárních osob použijte CSS třídu nonbinary.

// Zpracování dat
// zapni hlavu
// V tomto cvičení budeme opět pracovat s poli z našich jednohubek.

// Pomocí metody forEach napište cyklus, který vypíše do konzole poslední písmeno z každého jména v poli names.
names.forEach(jmeno => {
    console.log(jmeno[jmeno.length-1])
});
// Pomocí metody filter získejte z pole names pouze ta jména, která jsou delší než 4 znaky.
const jmenaCtyriZnaky = names.filter(jmeno=>jmeno.length>4);
console.log(jmenaCtyriZnaky);
// Pomocí metody filter získejte z pole persons pouze dospělé muže.
const dospelyMuzi = persons.filter(osoba=>osoba.gender==='male' && osoba.age>=18);
console.log(dospelyMuzi);
// Pomocí metody every zjistěte, jestli v poli persons platí, že každá zletilá osoba je vždy buď muž nebo žena (tedy že vlastnost gender má hodnotu male nebo hodnotu female).
const dospelaOsobaMuz = persons.every(osoba=>osoba.age>=18 && (osoba.gender==='male'||osoba.gender==='female'));
console.log(dospelaOsobaMuz);

// Pomocí metody forEach napište cyklus, který spočítá průměr čísel v poli numbers.
let soucet = 0;
let pocet= 0;
numbers.forEach(cislo => {
    soucet+=cislo
    pocet+=1;
});
const prumer = soucet/pocet
console.log(prumer);

// Nákupní seznam
// zapni hlavu
// V tomto cvičení na stránce zobrazíme položky nákupního seznamu uložného v poli objektů.

// Založte si nový JavaScriptový projekt se soubory index.html a index.js.
// Na začátek souboru index.js vložte následující strukturu představující položky nákupního seznamu.
const items = [
  {
    id: 'MFJSFr',
    product: 'Rohlíky',
    amount: '10',
    done: false,
  },
  {
    id: 'wvsbDD',
    product: 'Máslo',
    amount: '500 g',
    done: true,
  },
  {
    id: 'm0CccN',
    product: 'Šunka',
    amount: '200 g',
    done: true,
  },
];
// V souboru index.html vytvořte prázdný seznam:
// <ul class="shopping-list"></ul>
// V souboru index.js vyberte ze stránky seznam .shopping-list a pomocí metod map, join a vlastnosti innerHTML vytvořte obsah stránky zobrazující položky z pole items. Každá položka v HTML bude mít následující strukturu:
// <li class="item">
//   <div class="item__name">Rohlíky</div>
//   <div class="item__amount">10</div>
// </li>
const shopingList = document.querySelector('.shopping-list');

const polozky = 
items.map(polozka =>
`
<li class="item">
    <div class='item_name'>${polozka.product} </div> 
    <div class='item_amount'>${polozka.amount} </div>
</li>
`)
.join('');
shopingList.innerHTML = polozky;