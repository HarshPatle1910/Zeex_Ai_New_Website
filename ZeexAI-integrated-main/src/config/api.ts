/**
 * API Configuration
 * Centralized configuration for backend API endpoints
 */

// Backend API base URL
// In development, backend runs on http://127.0.0.1:8000
// In production, update this to your production backend URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  DEMO_REQUEST: `${API_BASE_URL}/demo-request`,
  APPLICATIONS: `${API_BASE_URL}/api/applications/`,
  CHECK_DATA: `${API_BASE_URL}/api/check-data`,
  HEALTH: `${API_BASE_URL}/health`,
} as const;

