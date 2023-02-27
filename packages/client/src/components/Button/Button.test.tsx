import { Button } from 'components/Button';
import { create } from 'react-test-renderer';
import MockThemeWrapper from 'src/hoc/MockThemeWrapper';

describe('Button', () => {
  it('renders <Button /> correctly', () => {
    const mockFn = jest.fn();
    const tree = create(
      <MockThemeWrapper>
        <Button variant="primary" type="submit" onClick={mockFn} onSubmit={mockFn}>
          LOGIN
        </Button>
      </MockThemeWrapper>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
