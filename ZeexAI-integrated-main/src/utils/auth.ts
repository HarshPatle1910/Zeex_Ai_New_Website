/**
 * Authentication utility
 * Manages admin login state using localStorage
 */

const AUTH_KEY = 'zeex_admin_auth';
const ADMIN_EMAIL = 'admin@zeexai.com';
const ADMIN_PASSWORD = 'ZeexAI@Pass2025';

export interface AuthState {
  isAuthenticated: boolean;
  username: string;
}

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const auth = localStorage.getItem(AUTH_KEY);
  if (!auth) return false;
  
  try {
    const authData = JSON.parse(auth);
    return authData.isAuthenticated === true && authData.username === ADMIN_EMAIL;
  } catch {
    return false;
  }
};

/**
 * Login function
 */
export const login = (email: string, password: string): { success: boolean; error?: string } => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const authData: AuthState = {
      isAuthenticated: true,
      username: ADMIN_EMAIL,
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
    return { success: true };
  }
  return { success: false, error: 'Invalid email or password' };
};

/**
 * Logout function
 */
export const logout = (): void => {
  localStorage.removeItem(AUTH_KEY);
};

/**
 * Get current auth state
 */
export const getAuthState = (): AuthState => {
  if (isAuthenticated()) {
    return {
      isAuthenticated: true,
      username: ADMIN_EMAIL,
    };
  }
  return {
    isAuthenticated: false,
    username: '',
  };
};

