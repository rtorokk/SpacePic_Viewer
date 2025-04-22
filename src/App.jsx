import { useState, useEffect } from 'react';
import './App.css';
import DatePicker from './components/DatePicker';
import ImageCard from './components/ImageCard';

function App() {
  const [date, setDate] = useState('2023-04-22'); // Default date
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPOD();
  }, [date]);

  return (
    <div>
      <h1>SpacePic Viewer</h1>
      <DatePicker date={date} onChange={setDate} />
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