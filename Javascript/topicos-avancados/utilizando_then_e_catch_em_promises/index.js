function execute() {
  // faz alguma coisa

  return new Promise((resolve, reject) => {
    console.log(`A promise está sendo executada...`);
    setTimeout(() => {
      if (false) {
        reject(`A promise foi rejeitada`);
      } else {
        console.log(`Resolvendo a promise...`);
        resolve(`RESULTADO`);
      }
    }, 2000);
  });
}

// const p = execute();

execute()
  .then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}.`);
  })
  .catch((err) => {
    console.log(`A promise foi rejeitada. Motivo: ${err}`);
  })
  .finally(() => {
    console.log(`A promise foi finalizada!`);
  });
