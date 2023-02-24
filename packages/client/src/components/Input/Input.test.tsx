import { Input } from 'components/Input';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ThemeWrapper from 'src/hoc/ThemeWrapper';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Input', () => {
  it('renders <Input /> correctly', () => {
    const mockVar = {};
    const mockFn = jest.fn().mockImplementationOnce(() => null);
    const tree = create(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeWrapper>
            <Input
              key="name"
              register={mockFn}
              name="name"
              type="input"
              label="label"
              placeholder="placeholder"
              validationRules={mockVar}
            />
          </ThemeWrapper>
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
