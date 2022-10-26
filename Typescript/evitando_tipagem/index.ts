function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {
  // ...
}

sendSpaceship({ pilot: "Han Solo", copilot: "Chewbacca" });

sendSpaceship({ pilot: "Luke" });

// let input: unknown;
let input: any; // 'desabilita' o typescript, não funciona nenhuma tipagem, não é recomendado

input = "Test";
input = 20;
input = [];

let text: string;

text = input; // Type 'unknown' is not assignable to type 'string'.

input = text;

function verification(test) {
  if (test) {
  } else {
    let _check: never;
    // _check = ""; // Type 'string' is not assignable to type 'never'.
    let text = _check;

    text = ""; // Type 'string' is not assignable to type 'never'.
    return _check;
  }
}
