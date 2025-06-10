export const logServerPort = (port: Number) => {
  console.log(`⌗ Server running on http://localhost:${port}`);
};
export const logError = (error: Error) => {
  console.error(`❗ Error: ${error.message}`);
};
