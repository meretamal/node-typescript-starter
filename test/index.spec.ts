import { salute } from '@/index';

describe('salute', () => {
  it('should return a salute', () => {
    expect(salute('John')).toEqual('Hello John');
  });
});
