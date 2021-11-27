import _talks from "../_data/talks.json";
import videoIds from "../_data/track_to_videoIds.json";

const talks = _talks.map((t) => ({
  ...t,
  videoId: videoIds[t.track],
}));

export function getTalkById(id) {
  return talks.find((t) => t.id === id);
}

export function getAllTalks() {
  return talks;
}
