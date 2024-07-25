import Button from "./Components/Button";
import Review from "./Components/Review";
import Basic from "./Components/Basic";
import './App.css';


function App() {
    return (
    <div>
    <h1>Fruits Farm </h1>
    <p>This is a beautiful farm.</p>
    <h2>Our Fruits</h2>
    <Basic />

   {/* <button>Apple</button>
    <button>Banana</button>
    <button>Orange</button>
    <button>Strawberry</button> */}
    <Button title="Apple" />
    <Button  title="Bannana" />
    <Button  title="Orange"/>
    <Button  title="Strawberry"/>
  {/* Props are passed as arguments to the Review function. */}
<Review title="Apple" description="This is a red apple" rating="5" />
<Review title="Banana" description="This is a yellow banana" rating="4" />
<Review title="Orange" description="This is a orange orange" rating="3" />
<Review title="Strawberry" description="This is a red strawberry`" rating="2" />

    </div>
    )
  }


  export default App;