import { Input } from 'components/Input';
import { create } from 'react-test-renderer';
import MockThemeWrapper from 'src/hoc/MockThemeWrapper';

describe('Input', () => {
  it('renders <ForumPostsInput /> correctly', () => {
    const mockValidationRules = {};
    const mockFn = jest.fn();
    const tree = create(
      <MockThemeWrapper>
        <Input
          key="name"
          register={mockFn}
          name="name"
          type="input"
          label="label"
          placeholder="placeholder"
          validationRules={mockValidationRules}
        />
      </MockThemeWrapper>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
