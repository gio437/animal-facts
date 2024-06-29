import logo from './logo.svg';
import './App.css';

// create home page with different cards to take u to different pages of the site
// have different react router pages which will display different text from the different API's
// have a quote in each page with a next page button
// MAKE SURE API WORKS
// Make a timer 

function App() {
  const getQuote = () => {
    fetch('https://dogapi.dog/api/v2/breeds')
    .then(response => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    // Process the response data here
    console.log(data); 
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });
  }

  getQuote();

  return (
    <div className="App">
      <div class='header'>
        <div>&#128021;</div>
        <div>Breed</div>
      </div>
    </div>
  );
}

export default App;
