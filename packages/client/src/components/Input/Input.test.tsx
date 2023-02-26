import { Input } from 'components/Input';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MockThemeWrapper from 'src/hoc/MockThemeWrapper';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Input', () => {
  it('renders <Input /> correctly', () => {
    const mockValidationRules = {};
    const mockFn = jest.fn().mockImplementationOnce(() => null);
    const tree = create(
      <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
