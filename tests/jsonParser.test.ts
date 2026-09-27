import { parseJSON } from '../src/utils/jsonParser';

describe('JSON Parser', () => {
  test('should parse the book orders JSON file into a JavaScript object', async () => {
    const result = await parseJSON('./src/data/book orders.json');

    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });
});

