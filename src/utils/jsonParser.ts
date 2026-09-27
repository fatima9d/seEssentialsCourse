import { readFile } from 'fs/promises';
import logger from '../utils/logger';

export async function parseJSON(filePath: string): Promise<unknown> {
  try {
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    logger.error(
      'Error while parsing JSON file %s: %o',
      filePath,
      error
    );
    throw error;
  }
}