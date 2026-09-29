const fs = require("fs");
const { getAllStatesWithDistricts } = require("india-states-districts");

const raw = getAllStatesWithDistricts();
const allLocations = raw.flatMap((state) =>
  state.districts.map((district) => `${district}, ${state.name}`)
);

fs.writeFileSync("./src/data/locations.json", JSON.stringify(allLocations, null, 2));
console.log(`Generated ${allLocations.length} locations.`);