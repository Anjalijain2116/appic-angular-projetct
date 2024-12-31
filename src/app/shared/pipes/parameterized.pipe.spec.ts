import { ParameterizedPipe } from './parameterized.pipe';

describe('ParameterizedPipe', () => {
  it('create an instance', () => {
    const pipe = new ParameterizedPipe();
    expect(pipe).toBeTruthy();
  });
});
