let crew: [string, string, string];

crew[0] = "Isaac";
crew[1] = "Leonardo";
crew[2] = "Pedro";
crew[3] = "Juliana"; // Tuple type '[string, string, string]' of length '3' has no element at index '3'.

let point: [number, number];

point = [2, 5];

let [x, y] = point;

const [name, setName] = useState(""); // tupla
