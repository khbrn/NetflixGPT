import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Body from '../Body';
import { addUser, removeUser } from '../../redux/userSlice';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}));
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock(import("firebase/auth"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    onAuthStateChanged: vi.fn(),
  }
})

describe('Body Component', () => {
  const mockDispatch = vi.fn();
  const mockNavigate = vi.fn();

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should dispatch addUser and navigate to /browse when user is authenticated', async () => {
    const mockUser = { email: 'test@example.com', displayName: 'Test User', uid: '12345' };

    // Mock onAuthStateChanged to simulate an authenticated user
    (onAuthStateChanged as jest.Mock).mockImplementation((_auth, callback) => {
      callback(mockUser);
      return () => {};
    });

    render(<Body />);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(addUser({ id: mockUser.uid, email: mockUser.email, displayName: mockUser.displayName }));
      expect(mockNavigate).toHaveBeenCalledWith('/browse');
    });
  });

  it('should dispatch removeUser and navigate to / when user is not authenticated', async () => {
    // Mock onAuthStateChanged to simulate a non-authenticated user
    (onAuthStateChanged as jest.Mock).mockImplementation((_auth, callback) => {
      callback(null);
      return () => {};
    });

    render(<Body />);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(removeUser());
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
