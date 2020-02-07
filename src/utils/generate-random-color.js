import { generateRandomNumber } from "./generate-random-number";

const generateRandomColor = (alpha) => `rgba(${generateRandomNumber(0, 255)}, ${generateRandomNumber(0,255)}, ${generateRandomNumber(0,255)}, ${alpha})`;

export { generateRandomColor };
