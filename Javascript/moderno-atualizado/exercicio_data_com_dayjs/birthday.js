const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day") + 1;

  console.log(`Idade: ${ageInYears} anos.
Próximo aniversário é em: ${nextBirthday.format("DD/MM/YYYY")}.
Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday} dia(s).`);
}

birthday("1992-10-03");
