import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('./pages/Home', () => () => <div>Home Page</div>);
jest.mock('./pages/Crew', () => () => <div>Crew Page</div>);
jest.mock('./pages/About', () => () => <div>About Page</div>);
jest.mock('./pages/Contact', () => () => <div>Contact Page</div>);
jest.mock('./pages/Service', () => () => <div>Services Page</div>);
jest.mock('./pages/UserProfile', () => () => <div>User Profile Page</div>);

describe('App Routing', () => {
  it('should render Home Page on default route', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('should render Crew Page on /crew route', () => {
    window.history.pushState({}, 'Crew Page', '/crew');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Crew Page')).toBeInTheDocument();
  });

  it('should render About Page on /about route', () => {
    window.history.pushState({}, 'About Page', '/about');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });

  it('should render Contact Page on /contact route', () => {
    window.history.pushState({}, 'Contact Page', '/contact');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Contact Page')).toBeInTheDocument();
  });

  it('should render Services Page on /services route', () => {
    window.history.pushState({}, 'Services Page', '/services');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Services Page')).toBeInTheDocument();
  });

  it('should render User Profile Page on /clients/:userId route', () => {
    window.history.pushState({}, 'User Profile Page', '/clients/123');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('User Profile Page')).toBeInTheDocument();
  });
});
