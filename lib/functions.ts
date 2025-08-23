import ShortUniqueId from "short-uuid";

const translator = ShortUniqueId();

export function shortUUID(uuid: string): string {
  return translator.fromUUID(uuid);
}

export function longUUID(uuid: string): string {
  return translator.toUUID(uuid);
}
