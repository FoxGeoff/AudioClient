import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TestValue } from '../interface/test-value';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const testValues = [
      { Id: 11, Value: 'Value1', Description: 'Questions about a nice hero' },
      { Id: 12, Value: 'Value2', Description: 'Questions about a drug hero' },
      { Id: 13, Value: 'Value3', Description: 'Questions about a braging hero' },
      { Id: 14, Value: 'Value4', Description: 'Questions about a nice hero' },
      { Id: 15, Value: 'Value5', Description: 'Questions about a drug hero' },
      { Id: 16, Value: 'Value6', Description: 'Questions about a braging hero' },
      { Id: 17, Value: 'Value7', Description: 'Questions about a nice hero' },
      { Id: 18, Value: 'Value8', Description: 'Questions about a drug hero' },
      { Id: 19, Value: 'Value9', Description: 'Questions about a braging hero' },
      { Id: 20, Value: 'Value10', Description: 'Questions about a braging hero' }
    ];
    return { testValues };
  } 

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(testValues: TestValue[]): number {
    return testValues.length > 0 ? Math.max(...testValues.map(testVal => testVal.Id)) + 1 : 11;
  }
}
