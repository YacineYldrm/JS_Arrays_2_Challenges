// ==========================================
//                  Array
//            slice & split methods
// ==========================================

console.log("%c level 1_8 ––> slice, split", "color: blue; background-color: gold");

const reiseziele = ["Bretagne", "Mailand", "Lissabon", "Faro", "Porto", "Istanbul", "Amsterdam"];

const newReiseziele = reiseziele.slice(2);

console.log(reiseziele);
console.log(newReiseziele);

console.log("%c level 1_10 ––> slice, split", "color: blue; background-color: gold");

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

const textArr = text.split(".");

console.log(textArr);

const textArr2 = text.split(" ");

console.log(textArr2);

const textArr3 = text.split("");

console.log(textArr3);

console.log("%c level 1_1 ––> forEach, map", "color: blue; background-color: gold");

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

const newGetraenke = getraenke.sort();


const myDrinks = newGetraenke.forEach((drink) => 
{
    document.write(drink + "<br>");
}); 

console.log("%c level 1_2 ––> forEach, map", "color: blue; background-color: gold");

const upperDrinks = getraenke.map((drink) => drink.toUpperCase());

console.log(upperDrinks);

console.log("%c level 1_3 ––> forEach, map", "color: blue; background-color: gold");

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const arrMulti = array.map((value) => value * 2).sort((value1, value2) => value1 - value2);
// const sortedArr = arrMulti.sort((value1, value2) => value1 - value2);

console.log(arrMulti);

console.log("%c level 1_4 ––> forEach, map", "color: blue; background-color: gold");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const fahrenheitToCelsius = fahrenheit.map((value) => Math.floor((value - 32) / 1.8));

console.log(fahrenheitToCelsius);

console.log("%c level 1_5 ––> forEach, map", "color: blue; background-color: gold");

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const divByThree = checkNumber.map((value) => 
{
    if(value % 3 === 0)
    {
        return value + 100;
    }
    else
    {
        return value;
    }
});

console.log(divByThree);

console.log("%c level 1_6 ––> forEach, map", "color: blue; background-color: gold");

let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

const newAlbum = album.map((element) => 
{
    if(element.includes(".") === true )
    {
        return element.toLowerCase().slice(0, element.indexOf('.'));
    }
    else
    {
        return "invalid";
    }
});

console.log(newAlbum);

console.log("%c level 1_1 ––> sort, reverse", "color: blue; background-color: gold");

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortedLanguages = languages.sort();

console.log(sortedLanguages);

console.log("%c level 1_2 ––> sort, reverse", "color: blue; background-color: gold");

let languages2 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung2 = languages2.sort().reverse();
console.log(sortierung2);

console.log("%c level 2_1 ––> sort, reverse", "color: blue; background-color: gold");

let nameString = "Sergio, Hannah, Regallager, Reliefpfeiler, Rentner";

const nameArr = nameString.split("").reverse().join("");
const newNameArr = nameArr.split(",").reverse().join(" ");

console.log(newNameArr);

let sentenceString = "Ella mag alle Bohnen";

const sentenceArr = sentenceString.split("").reverse().join("");

console.log(sentenceArr);

let sentenceString2 = "han nesaH has ennaH";

const sentenceArr2 = sentenceString2.split("").reverse().join("");

console.log(sentenceArr2);

console.log("%c level 2_1 ––> sort, reverse", "color: blue; background-color: gold");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const sortedNum = numArray2.sort((value1, value2) => value1 - value2);

console.log(sortedNum);