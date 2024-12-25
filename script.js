function firstNonRepeatedChar(str) {
	const charCount = {};

  // Step 1: Count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null or a default value
  return null;
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
