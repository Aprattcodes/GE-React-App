// import LongCard from './components/longitude';
// import LatCard from './components/latitude';
import './App.css';
import Coordinates from './components/coordinates';

const App = () => {
  return (
    <div className="App">
      {/* <LongCard
        sunrise="7:27:02 AM"
        sunset="5:05:55 PM" 
      />
      <LatCard
        sunrise="7:27:02 AM"
        sunset="5:05:55 PM" 
      /> */}
      <Coordinates/>
    </div>
  );
};

export default App;
