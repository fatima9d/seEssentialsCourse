
import { readCSVFile } from '../src/utils/parser';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

describe('CSV Parser', () => {
  let tempDir: string;

  beforeAll(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'csv-tests-'));
  });

  afterAll(async () => {
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  test('should parse the cake orders CSV file', async () => {
    const filePath = path.resolve(
      __dirname,
      '../src/data/cake orders.csv'
    );

    const result = await readCSVFile(filePath);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(Array.isArray(result[0])).toBe(true);
  });

  test('should include all headers when includeHeader is true', async () => {
    const filePath = path.resolve(
      __dirname,
      '../src/data/cake orders.csv'
    );

    const result = await readCSVFile(filePath, true);

    expect(result.length).toBeGreaterThan(0);

    expect(result[0]).toEqual([
      'id',
      'Type',
      'Flavor',
      'Filling',
      'Size',
      'Layers',
      'Frosting Type',
      'Frosting Flavor',
      'Decoration Type',
      'Decoration Color',
      'Custom Message',
      'Shape',
      'Allergies',
      'Special Ingredients',
      'Packaging Type',
      'Price',
      'Quantity'
    ]);
  });

  test('should parse a different CSV dataset', async () => {
    const filePath = path.join(tempDir, 'test.csv');

    await fs.writeFile(
      filePath,
      'name,age\nAlice,20\nBob,25'
    );

    const result = await readCSVFile(filePath);

    expect(result).toEqual([
      ['Alice', '20'],
      ['Bob', '25']
    ]);
  });

  test('should return an empty array for an empty CSV file', async () => {
    const filePath = path.join(tempDir, 'empty.csv');

    await fs.writeFile(filePath, '');

    const result = await readCSVFile(filePath);

    expect(result).toEqual([]);
  });

  test('should reject malformed CSV data', async () => {
    const filePath = path.join(tempDir, 'invalid.csv');

    await fs.writeFile(
      filePath,
      'name,age\n"Alice,20'
    );

    await expect(readCSVFile(filePath)).rejects.toThrow();
  });

  test('should reject when the CSV file does not exist', async () => {
    const filePath = path.join(tempDir, 'missing.csv');

    await expect(readCSVFile(filePath)).rejects.toThrow();
  });
});
