import { create } from 'react-test-renderer';
import { Link } from 'components/Link';
import { BrowserRouter } from 'react-router-dom';
import ThemeWrapper from 'src/hoc/ThemeWrapper';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Link', () => {
  it('renders <Link /> correctly', () => {
    const tree = create(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeWrapper>
            <Link to="/" variant="size24">
              LOGIN
            </Link>
          </ThemeWrapper>
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});