// src/utils/parser.ts
import fs from 'fs';
import logger from './logger';



export const parseJSON = (filePath: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    
    fs.readFile(filePath, { encoding: 'utf-8' }, (error, data) => {
      if (error) {
        logger.error(
          'Error while reading JSON file %s: %o',
          filePath,
          error
        );
        reject(error);
        return;
      }

      try {
        const parsedData = JSON.parse(data);
        resolve(parsedData);
      } catch (error) {
        logger.error(
          'Error while parsing JSON file %s: %o',
          filePath,
          error
        );
        reject(error);
      }
    });
  });
};
