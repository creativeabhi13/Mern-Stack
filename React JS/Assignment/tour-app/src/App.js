import React, { useEffect, useState } from 'react'
import "./App.css"
import touristData from './Data/touristData';
import Tour from './Component/Tour';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTours(touristData);
        }, 1000);
    }, []);
    const removeTour = (id) => {
      setTours(tours.filter((tour) => tour.id !== id));
    };

    if(loading){
        return <h1 className="loading">Loading...</h1>
    }

    if(tours.length === 0){
        return (
            <div className="title">
                <h2>No More Tours Left</h2>
                <button className='btn' onClick={() => setTours(touristData)}>Refresh</button>
            </div>
        )
    }
  return (
   <main>
    <section>
        <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
        </div>
        <div>
            {tours.map((tour) => (
                <Tour key={tour.id} {...tour} onRemove={removeTour} />
            ))}

        </div>
    </section>
   </main>
  )
}

export default App