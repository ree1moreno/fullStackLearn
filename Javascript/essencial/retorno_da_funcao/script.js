function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration;
  console.log(`Nova velocidade: ${newVelocity}.`);
  return newVelocity;
}

let velocity = 80;
let acceleration = 5;

console.log("antes", velocity);

velocity = speedUp(velocity, acceleration);

console.log("depois", velocity);
