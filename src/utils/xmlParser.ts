
import fs from 'fs';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import logger from '../utils/logger';

export const parseXML = (filePath: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        logger.error(
          `Error while reading XML file ${filePath}: ${error.message}`
        );
        reject(error);
        return;
      }

      // Validate XML before parsing
      const validationResult = XMLValidator.validate(data);

      if (validationResult !== true) {
        logger.error(
          `Invalid XML file ${filePath}: ${JSON.stringify(validationResult)}`
        );
        reject(new Error(`Invalid XML file: ${filePath}`));
        return;
      }

      try {
        const parser = new XMLParser();
        const parsedData: unknown = parser.parse(data);

        logger.info(`Successfully parsed XML file: ${filePath}`);
        resolve(parsedData);
      } catch (error) {
        logger.error(
          `Error while parsing XML file ${filePath}: ${String(error)}`
        );
        reject(error);
      }
    });
  });
};

