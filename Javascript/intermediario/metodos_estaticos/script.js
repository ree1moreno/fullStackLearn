class ResourceProcessorStation {
  constructor(name, monthlyProcessing) {
    this.name = name;
    this.monthlyProcessing = monthlyProcessing;
  }

  static calculateProcessInHours(monthlyProcessing, hours) {
    return (monthlyProcessing / 720) * hours;
  }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(
  500,
  6,
).toFixed(2);

console.log(totalProcessing); // 4.17

let processor = new ResourceProcessorStation("Gaia", 2000);

processor.calculateProcessInHours(processor.monthlyProcessing, 10);

console.log(processor); // ERRO, não encontra pois é um método estático

let totalProcessed = ResourceProcessorStation.calculateProcessInHours(
  processor.monthlyProcessing,
  10,
).toFixed(2);

console.log(totalProcessed); // 27.78
