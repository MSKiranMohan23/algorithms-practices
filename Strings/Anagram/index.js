const areAnagram = (string1, string2) => {
  let str1 = string1.split("");
  let str2 = string2.split("");

  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.sort().join();
  str2 = str2.sort().join();

  if (str1 !== str2) {
    return false;
  }

  return true;
};

console.log("Are Anagram", areAnagram("listen", "silent"));
