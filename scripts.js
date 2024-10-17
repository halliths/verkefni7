/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir samhljóðar */
// SÁ AÐ ÞAÐ VANTAÐI þ BÆTTI ÞVÍ VIÐ Í CONSONANTS!
const CONSONANTS = 'bcdfghjklmnpqrstvwxzþ'.split('');

/** Íslenskir sérhljóðar */ 
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean} `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (!isString(str)) {
    return null; // Skilar null ef str er ekki strengur
  }
  if (str === '') {
    return ''; // Skilar tómum streng ef str er tómur
  }
  const words = str.split(' ');
  let longestWord = words[0];

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.assert(longest('halló heimur!') === 'heimur!', 'longest: ætti að skila heimur!');
console.assert(longest('hallo palli') === 'hallo', 'longest: ætti að skila hallo');
function shortest(str) {
  if (!isString(str)) {
    return null; // Skilar null ef str er ekki strengur
  }
  if (str === '') {
    return ''; // Skilar tómum streng ef str er tómur
  }
  const words = str.split(' ');
  let shortestWord = words[0];

  for (let word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}
console.assert(shortest('halló heimur!') === 'halló', 'shortest: ætti að skila halló');
console.assert(shortest('') === '', 'shortest: ætti að skila tómum streng ef tómur strengur');
function reverse(str) {
  if (isString(str)) {
  const split = str.split('');
  const reversed = split.reverse()

  return reversed.join('')
  }
  return null;
}
console.assert(reverse('hæ') == 'æh', 'reverse: snýr við einföldum streng');
console.assert(reverse(false)==null, 'reverse:ef ekki strengur, skila null');

function palindrome(str) {
  if (isString(str) && str!== '') {
    const reversed = reverse(str)
    return str.toLowerCase() === reversed.toLowerCase() 
  }
  return false;
}
console.assert(palindrome('halló') === false, 'palindrome: strengur, ekki');
console.assert(palindrome('hah') === true, 'palindrome: strengur er');
console.assert(palindrome('') === false, 'palindrome: tómi strengur er ekki');
function vowels(str) {
  if(!isString(str)) {
    return 0;
  }

  let teljari = 0;
  for (let char of str.toLowerCase()) {
    if (VOWELS.includes(char)) {
      teljari++
    }
  }
  return teljari;
}
console.assert(vowels('halló') === 2, 'vowels: ætti að skila 2');
console.assert(vowels('nkgh') === 0, 'vowels: ætti að skila 0');

function consonants(str) {
  if(!isString(str)) {
    return 0;
  }

  let teljari=0;
  for (let char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)) {
      teljari++
    }
  }
  return teljari;
}
console.assert(consonants('halló') === 3, 'consonants: ætti að skila 3');
console.assert(consonants('ái') ===0 , 'consonants: ætti að skila 0' );

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  let retry = true;
  while (retry) {
  alert('Sláðu inn streng með nokkrum orðum til að fá upplýsingar um:\n'+
    '- Lengsta orðið.\n'+
    '- Stysta orðið.\n' +
    '- Strenginn snúið við.\n'+
    '- Fjölda sérhljóða í streng.\n' +
    '- Fjölda samhljóða í streng.\n' +
    '- Hvort strengurinn sé samhverfur.');
    
    let input = prompt('Sláðu inn streng með nokkrum orðum:');

    // Lykkja til að bregðast við ef notandi cancellar input og leyfir að prófa aftur
    while (input == null) {
      const retry = confirm('Viltu prófa aftur?');
      if (!retry) {
        return; // Hætta ef notandi vill ekki prófa aftur
      }
      input = prompt('Sláðu inn streng með nokkrum orðum:');
    }

    if (isString(input) && input !=='') {
      const longestWord = longest(input);
      const shortestWord = shortest(input);
      const reversed = reverse(input);
      const FjoldiVowel = vowels(input);
      const FjoldiConsonant = consonants(input);
      const Samhverft = palindrome(input) ? 'samhverfur' :'ekki samhverfur'; // true=samhverfur false=ekki samhverfur
    
    alert(`Lengsta orðið er: ${longestWord}\n
      Stysta orðið er: ${shortestWord}\n
      Strengurinn snúinn við: ${reversed}\n
      Fjöldi sérhljóða í streng: ${FjoldiVowel}\n
      Fjöldi samhljóða í streng: ${FjoldiConsonant}\n
      Strengurinn er ${Samhverft}.`
    );
  }
  retry = confirm('Viltu prófa aftur?');
}
}