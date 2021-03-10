import React from 'react';
import 'bulma/css/bulma.css';

class FoodForm extends React.Component {
    
    render() {
        return (

            <div className="field boxis-half">

                <div className="media column is-half">
                    <div class="file has-name is-centered block ">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume" />
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                Choose a file…
                            </span>
                            </span>
                            <span class="file-name">
                            Screen Shot 2017-07-29 at 15.54.25.png
                            </span>
                        </label>
                    </div>
                    
                    <label class="label">Food Name</label>
                        <div class="control block">
                            <input class="input" type="text" placeholder="What food is it?" />
                        </div>

                    <label class="label">Calories</label>
                        <div class="control block">
                            <input class="input" type="text" placeholder="How many calories does it have?" />
                        </div>
                

                    <div class="control">
                        <button class="button is-info">Add Food</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodForm;
