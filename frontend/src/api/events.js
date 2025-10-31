import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getEvents = () => axios.get(`${API_URL}/events`);
export const getEventById = (id) => axios.get(`${API_URL}/events/${id}`);
export const createEvent = (data) => axios.post(`${API_URL}/events`, data);