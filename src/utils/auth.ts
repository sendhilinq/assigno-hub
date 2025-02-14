
export const isAuthenticated = () => {
  return !!sessionStorage.getItem("token");
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const logout = () => {
  sessionStorage.removeItem("token");
};

export const login = (token: string) => {
  sessionStorage.setItem("token", token);
};
