import { parseXML } from '../src/utils/xmlParser';
import fs from 'fs';

parseXML('./src/data/toy orders.xml').then((result) => {
    fs.writeFileSync('./src/data/toy orders-parsed.json', JSON.stringify(result, null, 2));

    console.log('XML parsed and saved successfully!');
  })
  .catch((error) => {
    console.error('Error:', error);
  });