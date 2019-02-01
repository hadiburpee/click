import React, {Component} from 'react';
import Card from './components/card/card';
import cards from "./cards.json";
import Container from './components/container/container';




class App extends Component {
  state = {
    cards
  }


  render() {
    return (
      <Container>
      {this.state.cards.map( card =>
        <Card 
        key={card.key}
        selected={card.selected}
        image={card.image}
        name={card.name}
        />
      )}
      </Container>
    );
  }
}

export default App;
