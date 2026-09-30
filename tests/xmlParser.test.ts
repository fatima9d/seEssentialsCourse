 import { parseXML } from '../src/utils/xmlParser';
import fs from 'fs';
describe('XML Parser', () => {
  test('should parse the toy orders XML file into a JavaScript object', async () => {
    const result = await parseXML('./src/data/toy orders.xml');

    expect(result).toBeDefined();
    fs.writeFileSync('./src/data/toy orders-parsed.json', JSON.stringify(result, null, 2));

    console.log('XML parsed and saved successfully!');
  });
});
