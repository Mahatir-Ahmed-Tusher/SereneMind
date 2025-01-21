export const config = {
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  }
} as const;