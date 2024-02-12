import { RegisterFormData } from "./pages/Register";

export const register = (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`);
};
