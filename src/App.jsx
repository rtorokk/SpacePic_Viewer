import { useState, useEffect } from 'react';
import './App.css';
import DatePicker from './components/DatePicker';
import ImageCard from './components/ImageCard';

function App() {
  // State to manage the selected date
  const [date, setDate] = useState('2023-04-22'); // Default date

  // State to store fetched data from the NASA API
  const [data, setData] = useState(null);

  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // State to store error messages
  const [error, setError] = useState(null);

  // Fetch data from NASA API whenever the date changes
  useEffect(() => {
    const fetchAPOD = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Clear any previous errors
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data'); // Handle HTTP errors
        }
        const result = await response.json();
        setData(result); // Store the fetched data
      } catch (err) {
        setError(err.message); // Store error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchAPOD();
  }, [date]); // Dependency array ensures the effect runs when the date changes

  return (
    <div>
      <h1>SpacePic Viewer</h1>
      {/* DatePicker component to select a date */}
      <DatePicker date={date} onChange={setDate} />
      {/* Conditional rendering for loading, error, and data */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <ImageCard data={data} />}
    </div>
  );
}

export default App;

/* 
App: SpacePic Viewer
Features:
- User selects a date
- Fetches space picture of the day from NASA API
- Displays the image and description
Components:
- DatePicker: For selecting the date
-ImageDisplay: For displaying the image and description
External API: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2023-04-22
*/