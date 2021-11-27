import talks from "../_talks/data.json";

export function getTalkById(id) {
  return talks.find((t) => t.id === id);
}

export function getAllTalks() {
  return talks;
}
