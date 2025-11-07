import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";

export const generateHorseName = () => uniqueNamesGenerator({
  dictionaries: [adjectives, animals],
  separator: " ",
  style: "capital",
});




export const generateUniqueColors = ({ usedColors }: { usedColors: Set<string> }): string => {
  const availableColors = colors.filter(color => !usedColors.has(color));

  if (availableColors.length === 0) {
    throw new Error("No more unique colors available!");
  }

  const color = availableColors[Math.floor(Math.random() * availableColors.length)];

  if (!color) {
    throw new Error("Failed to pick a color");
  }

  usedColors.add(color);

  return color;
};