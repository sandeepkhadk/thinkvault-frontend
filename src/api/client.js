// import axios from 'axios';

// const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// // Use a fixed user ID for the hackathon demo
// // In production you would use Supabase Auth
// const USER_ID = 'hackathon-demo-user';

// const api = axios.create({
//   baseURL: API_BASE,
//   headers: { 'Content-Type': 'application/json' },
// });

// export const chatAPI = {
//   sendMessage: (message, conversationHistory = []) =>
//     api.post('/chat/', {
//       message,
//       user_id: USER_ID,
//       conversation_history: conversationHistory,
//     }),
// };

// export const memoryAPI = {
//   getAll: (topic = null) => {
//     const params = { user_id: USER_ID };
//     if (topic) params.topic = topic;
//     return api.get('/memories/', { params });
//   },
//   delete: (id) =>
//     api.delete('/memories/', { params: { id, user_id: USER_ID } }),
// };

// export const searchAPI = {
//   search: (query) =>
//     api.post('/search/', { query, user_id: USER_ID }),
// };

// export const flashcardAPI = {
//   getAll: () =>
//     api.get('/flashcards/', { params: { user_id: USER_ID } }),
//   generate: (memoryId) =>
//     api.post('/summarize/', { memory_id: memoryId, user_id: USER_ID }),
//   bulkGenerate: () =>
//     api.post('/flashcards/bulk/', { user_id: USER_ID }),
// };

// export const topicAPI = {
//   getTopics: () =>
//     api.get('/topics/', { params: { user_id: USER_ID } }),
// };

// backend ready na hun jel

import axios from "axios";

const MOCK_MODE = true; // enable mock mode

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000/api";
const USER_ID = "hackathon-demo-user";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

/* ---------------- MOCK DATA ---------------- */

const mockMemories = [
  { id: 1, content: "AI is transforming healthcare", topic: "AI" },
  { id: 2, content: "Neural networks learn patterns", topic: "ML" }
];

const mockFlashcards = [
  { id: 1, question: "What is AI?", answer: "Artificial Intelligence" },
  { id: 2, question: "What is ML?", answer: "Machine Learning" }
];

/* ---------------- CHAT ---------------- */

export const chatAPI = {
  sendMessage: async (message) => {
    if (MOCK_MODE) {
      return Promise.resolve({
        data: { reply: "This is a mock AI response for: " + message }
      });
    }
    return api.post("/chat/", { message, user_id: USER_ID });
  }
};

/* ---------------- MEMORIES ---------------- */

export const memoryAPI = {
  getAll: async () => {
    if (MOCK_MODE) {
      return Promise.resolve({ data: mockMemories });
    }
    return api.get("/memories/", { params: { user_id: USER_ID } });
  }
};

/* ---------------- SEARCH ---------------- */

export const searchAPI = {
  search: async (query) => {
    if (MOCK_MODE) {
      return Promise.resolve({
        data: mockMemories.filter(m =>
          m.content.toLowerCase().includes(query.toLowerCase())
        )
      });
    }
    return api.post("/search/", { query, user_id: USER_ID });
  }
};

/* ---------------- FLASHCARDS ---------------- */

export const flashcardAPI = {
  getAll: async () => {
    if (MOCK_MODE) {
      return Promise.resolve({ data: mockFlashcards });
    }
    return api.get("/flashcards/", { params: { user_id: USER_ID } });
  }
};

/* ---------------- TOPICS ---------------- */

export const topicAPI = {
  getTopics: async () => {
    if (MOCK_MODE) {
      return Promise.resolve({
        data: ["AI", "Machine Learning", "Data Science"]
      });
    }
    return api.get("/topics/", { params: { user_id: USER_ID } });
  }
};