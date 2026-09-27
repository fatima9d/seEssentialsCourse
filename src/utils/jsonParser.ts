import fs from 'fs';
import logger from './logger';

// Read and parse a JSON file into a JavaScript object
export const parseJSON = (
  filePath: string
): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        logger.error(`Failed to read JSON file: ${err.message}`);
        reject(err);
        return;
      }

      try {
        // Convert JSON text into a JavaScript object
        const javascriptObject = JSON.parse(data) as Record<string, unknown>;

        logger.info(`Successfully parsed JSON file: ${filePath}`);
        resolve(javascriptObject);
      } catch (error) {
        logger.error(`Failed to parse JSON file: ${error}`);
        reject(error);
      }
    });
  });
};
