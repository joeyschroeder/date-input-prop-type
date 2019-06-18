import { DATE_INPUT_FORMAT, dateInputPropType } from './date-input-prop-type';

describe('dateInputPropType', () => {
  it('should return undefined if prop matches date input format', () => {
    const date = '2019-01-01';
    const props = { date };

    const result = dateInputPropType(props, 'date');
    expect(result).toEqual(undefined);
  });

  it('should return error if prop does not match date input format', () => {
    const date = 'test';
    const props = { date };

    const result = dateInputPropType(props, 'date');
    expect(result).toEqual(new Error(`date needs to be "${DATE_INPUT_FORMAT}" format.`));
  });
});
