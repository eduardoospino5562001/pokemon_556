import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

// Esta comprueba si el componente App se renderiza correctamente sin causar errores.
test('renders without crashing', () => {
  const { unmount } = render(<App />);
  unmount();
});
