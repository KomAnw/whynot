import { create } from 'react-test-renderer';
import { Link } from 'components/Link';
import { MemoryRouter } from 'react-router-dom';

it('renders <Link /> correctly', () => {
  const tree = create(
    <MemoryRouter>
      <Link to="/" variant="size24">
        LOGIN
      </Link>
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
