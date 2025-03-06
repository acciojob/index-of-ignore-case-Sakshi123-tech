function indexOfIgnoreCase(s1, s2) {
  // Edge case: If subStr (s2) is empty, return 0 (as an empty string is found at the start of any string)
  if (s2 === '') return 0;
  
  // Edge case: If the main string (s1) is empty, return -1
  if (s1 === '') return -1;
  
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();
  
  // Use indexOf to find the first occurrence of lowerS2 in lowerS1
  return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:"); // Ask user for the first string
const s2 = prompt("Enter s2:"); // Ask user for the second string (substring)
alert(indexOfIgnoreCase(s1, s2)); // Show the result
