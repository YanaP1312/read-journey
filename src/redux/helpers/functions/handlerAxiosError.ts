import axios from "axios";

interface Rejection {
  message: string;
  status: number;
}

export function handleAxiosError(
  error: unknown,
  fallbackMessage = "Something went wrong"
): Rejection {
  if (axios.isAxiosError(error) && error.response) {
    return {
      message: error.response.data?.message || fallbackMessage,
      status: error.response.status,
    };
  }
  return {
    message: fallbackMessage,
    status: 500,
  };
}
