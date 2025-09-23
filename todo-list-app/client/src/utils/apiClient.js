import { enqueueSnackbar } from "notistack";

const API_BASE_URL = "http://localhost:3000/api/v1";

const apiRequest = async(endpoint, options = {}) => {
    try {
        const token = localStorage.getItem("token");
        const defaultHeaders = {
            "Content-Type": "application/json",
            ...(token ? {
                Authorization: `Bearer ${token}` } : {}),
        };
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: options.method || "GET",
            headers: { ...defaultHeaders, ...(options.headers || {}) },
            body: options.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message || `Error ${response.status}`;
            enqueueSnackbar(errorMessage, { variant:'error' });
            
            if (response.status === 401) {
                localStorage.removeItem("token");
            }

            return { error: true, message: errorMessage, data: {} };
        }

        if (response.status === 204) {
            return { success: true };
        }

        return await response.json();
    } catch (error) {
        console.error("API Error:", error.message);
        enqueueSnackbar(errorMessage, { variant:'error' });
        return { error: true, message: errorMessage };
    }
}

export default apiRequest;