import React, {Component} from 'react';
import Card from './components/card/card';
import cards from "./cards.json";




class App extends Component {
  state = {
    cards
  }


  render() {
    return (
      <div>
      {this.state.cards.map( card =>
        <Card 
        key={card.key}
        selected={card.selected}
        image={card.image}
        />
      )}
      </div>
    );
  }
}

export default App;
