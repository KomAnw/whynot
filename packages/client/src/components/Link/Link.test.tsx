import { create } from 'react-test-renderer';
import { Link } from 'components/Link';
import { BrowserRouter } from 'react-router-dom';
import MockThemeWrapper from 'src/hoc/MockThemeWrapper';

describe('Link', () => {
  it('renders <Link /> correctly', () => {
    const tree = create(
      <BrowserRouter>
        <MockThemeWrapper>
          <Link to="/" variant="size24">
            LOGIN
          </Link>
        </MockThemeWrapper>
      </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
