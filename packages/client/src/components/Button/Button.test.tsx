import { Button } from 'components/Button';
import { create } from 'react-test-renderer';
import ThemeWrapper from 'src/hoc/ThemeWrapper';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Link', () => {
  it('renders <Button /> correctly', () => {
    const mockFn = jest.fn(() => null);
    const tree = create(
      <Provider store={store}>
        <ThemeWrapper>
          <Button variant="primary" type="submit" onClick={mockFn} onSubmit={mockFn}>
            LOGIN
          </Button>
        </ThemeWrapper>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
