import LongCard from './components/longitude';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <LongCard
        sunrise="7:27:02 AM"
        sunset="5:05:55 PM" 
      />
    </div>
  );
};

export default App;
