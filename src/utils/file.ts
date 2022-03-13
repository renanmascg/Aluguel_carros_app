import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename); // verifica se o arquivo existe
  } catch (error) {
    return;
  }

  await fs.promises.unlink(filename);
};
