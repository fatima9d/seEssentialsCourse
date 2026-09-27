import { parseJSON } from '../src/utils/jsonParser';
import fs from 'fs';
describe('JSON Parser', () => {
  test('should parse the book orders JSON file', async () => {
    const result = await parseJSON('./src/data/book orders.json');

    expect(result).toBeDefined();
    fs.writeFileSync(
      './src/data/book orders-parsed.json',
      JSON.stringify(result, null, 2)
    );
  });
});