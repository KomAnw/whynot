import { create } from 'react-test-renderer';
import { Link } from 'components/Link';
import { BrowserRouter } from 'react-router-dom';
import MockThemeWrapper from 'src/hoc/MockThemeWrapper';
import { Provider } from 'react-redux';
import store from 'src/store';
import 'jest-styled-components';

describe('Link', () => {
  it('renders <Link /> correctly', () => {
    const tree = create(
      <Provider store={store}>
        <BrowserRouter>
          <MockThemeWrapper>
            <Link to="/" variant="size24">
              LOGIN
            </Link>
          </MockThemeWrapper>
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
