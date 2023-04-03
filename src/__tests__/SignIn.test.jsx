import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../components/SignIn';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
        const handleLogin = jest.fn();
        render(<SignInContainer handleLogIn={handleLogin}/>)
        fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
        fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
        fireEvent.press(screen.getByText('Sign In'));

      await waitFor(() => {
        expect(handleLogin).toHaveBeenCalledTimes(1);

        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(handleLogin.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });      });
    });
  });
});
