import { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import { fetchQuote } from './api/fetchQuote'; // Optional API hook

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote().then(setQuote).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Counter Section */}
        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Simple Counter</h2>
          <div className="flex items-center justify-center gap-4 my-4">
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              +
            </button>
          </div>
        </section>

        {/* Task Manager Section */}
        <TaskManager />

        {/* API Data Section */}
        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Motivational Quote</h2>
          {quote ? (
            <blockquote className="italic text-gray-600 dark:text-gray-300">
              "{quote.content}" — <strong>{quote.author}</strong>
            </blockquote>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Loading quote...</p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
