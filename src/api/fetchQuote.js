export const fetchQuote = async () => {
  const response = await fetch('https://api.quotable.io/random');
  if (!response.ok) throw new Error('Failed to fetch quote');
  return response.json();
};
