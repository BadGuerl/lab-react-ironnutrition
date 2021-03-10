import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/food-box/FoodBox';
import FormButton from './components/form-button/FormButton';

function App() {
  const editing = true;

  return (
    <div className="App">
      <h1 className="title is-1 box">Iron Nutrition</h1>
      <div className={(!editing) ? 'columns is-hidden' :  'columns'}>
         <div className="column">
            <FormButton />
         </div> 
      </div> 
      <div className="columns">
        <div className="column">
          { foods.map(food => (
              <FoodBox 
                food={food}
              />
              )
            )
          }
        </div>

        <div className="column">

        </div>
      </div>
        
    </div>
  );
}

export default App;
