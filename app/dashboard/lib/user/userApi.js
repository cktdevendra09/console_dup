


export const API_BASE_URL = "http://localhost:8080/api"; 

export const API_ENDPOINTS = {
  BLOGS: `${API_BASE_URL}/blogs`,
  SINGLE_BLOG: (id) => `${API_BASE_URL}/blogs/${id}`,
  ADD_BLOG: `${API_BASE_URL}/blogs`,
  EDIT_BLOG: (id) => `${API_BASE_URL}/blogs/${id}`,
  DELETE_BLOG: (id) => `${API_BASE_URL}/blogs/${id}`,
  
  CATEGORIES: `${API_BASE_URL}/categories`,
  USERS: `${API_BASE_URL}/users`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
};
