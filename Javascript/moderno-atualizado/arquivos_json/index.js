const str = `{
  "name": "Isaac Pontes",
  "job": "Fullstack Developer",
  "technologies": ["HTML", "CSS", "Javascript", "SQL"],
  "working": true,
  "yearsOfExperience": 7,
  "website": null,
}`;

const str2 = JSON.stringify(str);
console.log(str2);

const obj = JSON.parse(str2);

console.log(obj);
