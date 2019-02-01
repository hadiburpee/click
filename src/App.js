import React, {Component} from 'react';
import Card from './components/card/card';
import cards from "./cards.json";
import Container from './components/container/container';
import Header from './components/header/header';




class App extends Component {
  state = {
    cards,
    score: 0

  }

  incrementScore = () => {
    this.setState( prevState => ({score: prevState.score + 1}));
  }

  resetScore = event => {
    this.setState( prevState => ({score: prevState.score - prevState.score}));
  }

  render() {
    console.log(cards);
    return (
      <Container>
      <Header>
      Album Cover Click Game ||
      Score: {this.state.score}
      </Header>
      {this.state.cards.map(card =>
        <Card 
        key={card.key}
        selected={card.selected}
        image={card.image}
        name={card.name}
        score={this.incrementScore}
        />
      )}
      </Container>
    );
  }
}

export default App;
