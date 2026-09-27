import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';
import logger from '../utils/logger';

export const parseXML = (filePath: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (error, data) => {
      if (error) {
        logger.error(
          'Error while reading XML file %s: %o',
          filePath,
          error
        );
        reject(error);
        return;
      }

      try {
        const parser = new XMLParser();
        const parsedData = parser.parse(data);

        resolve(parsedData);
      } catch (error) {
        logger.error(
          'Error while parsing XML file %s: %o',
          filePath,
          error
        );
        reject(error);
      }
    });
  });
};