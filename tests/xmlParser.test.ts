
import { parseXML } from '../src/utils/xmlParser';

describe('XML Parser', () => {
  test('should parse the toy orders XML file and return the expected data', async () => {
    const result = await parseXML('./src/data/toy orders.xml');

    expect(result).toBeDefined();

    const data = result as {
      row: Array<{
        OrderID: number;
        Type: string;
      }>;
    };


  });

  test('should reject when the XML file does not exist', async () => {
    await expect(
      parseXML('./src/data/nonexistent.xml')
    ).rejects.toThrow();
  });
});
