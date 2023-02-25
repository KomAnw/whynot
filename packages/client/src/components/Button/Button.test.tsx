import { Button } from 'components/Button';
import { create } from 'react-test-renderer';
import MockThemeWrapper from 'src/hoc/MockThemeWrapper';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Button', () => {
  it('renders <Button /> correctly', () => {
    const mockFn = jest.fn(() => null);
    const tree = create(
      <Provider store={store}>
        <MockThemeWrapper>
          <Button variant="primary" type="submit" onClick={mockFn} onSubmit={mockFn}>
            LOGIN
          </Button>
        </MockThemeWrapper>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
