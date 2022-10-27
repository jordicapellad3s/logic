/*
 * Reto #1.1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no palindromos.
 * Un Palindromo es una frase o palabra que se escriben y se leen igual al derecho y al revés
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 */

const isPalindrom = (word1, word2) => {
  const arrayWord1 = word1.split("");
  const revertedArrayWord1 = arrayWord1.reverse();
  const revertedWord = revertedArrayWord1.toString().replaceAll(",", "");

  const isPalindrom = revertedWord == word2;

  return isPalindrom;
};

console.log(isPalindrom("hola", "aloh"));
