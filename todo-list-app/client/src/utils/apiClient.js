import { enqueueSnackbar } from "notistack";

const API_BASE_URL = "http://localhost:3000/api/v1";

const apiRequest = async(endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
            ...options,
        });
        if (!response.ok) {
            debugger
            const errorData = await response.json();
            debugger
            const errorMessage = errorData.message || `Error ${response.status}`;
            enqueueSnackbar(errorMessage, { variant:'error' });
            return {};
        }
        return response;
    } catch (error) {
        console.error("API Error:", error.message);
        enqueueSnackbar(errorMessage, { variant:'error' });
        return {};
    }
}

export default apiRequest;