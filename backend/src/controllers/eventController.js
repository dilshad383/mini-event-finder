import { events } from "../data/events.js";
import { generateId } from "../utils/generateId.js";

export const getAllEvents = (req, res) => {
  const { location } = req.query;
  if (location) {
    const filtered = events.filter((e) =>
      e.location.toLowerCase().includes(location.toLowerCase())
    );
    return res.json(filtered);
  }
  res.json(events);
};

export const getEventById = (req, res) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
};

export const createEvent = (req, res) => {
  const { title, description, location, date, maxParticipants } = req.body;

  if (!title || !description || !location || !date || !maxParticipants) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newEvent = {
    id: generateId(),
    title,
    description,
    location,
    date,
    maxParticipants,
    currentParticipants: 0,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};
