import { uniqueNamesGenerator, adjectives, animals } from "unique-names-generator";

export const generateHorseName = () => uniqueNamesGenerator({
  dictionaries: [adjectives, animals],
  separator: " ",
  style: "capital",
});

export const generateUniqueColors = ({ usedColors }: { usedColors: Set<string> }): string => {
  let color;
  do {
    color = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;
  } while (usedColors.has(color));

  usedColors.add(color);
  return color;
};