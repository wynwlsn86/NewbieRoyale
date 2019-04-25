import React, { Component } from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


class App extends Component {
  constructor() {
    super();
    this.state= {
      cards: [],
      card: [],
      arenas: [],
      leagues: [],
      leaguePics: [],
      chests: [],
      deck: [],
      cardSelected: false,
      deckSelected: false,
      search: '',
      flashState: false,
      flashRemoveState: false
    }
    this.goBack = this.goBack.bind(this);
    this.addToDeck = this.addToDeck.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.goBackDeck = this.goBackDeck.bind(this);
    this.showDeck = this.showDeck.bind(this);
    this.searchCards = this.searchCards.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.toggleFlash = this.toggleFlash.bind(this);
    this.toggleRemoveFlash = this.toggleRemoveFlash.bind(this);
  }
  componentDidMount() {
    this.getCards();
    this.getArenas();
    this.getLeagues();
    this.getChests();
  }
  toggleFlash = () => {
    this.setState({flashState: !this.state.flashState});
  }
  toggleRemoveFlash = () => {
    this.setState({flashRemoveState: !this.state.flashRemoveState});
  }
  getCards() {
    fetch('http://www.clashapi.xyz/api/cards')
      .then(response => response.json())
      .then(data => this.setState({cards: data}));
  }
  getArenas() {
    fetch('http://www.clashapi.xyz/api/arenas')
      .then(response => response.json())
      .then(data => this.setState({arenas: data}));
  }
    getLeagues() {
    fetch('http://www.clashapi.xyz/api/leagues')
      .then(response => response.json())
      .then(data => this.setState({leagues: data}));
  }
    getChests() {
    fetch('http://www.clashapi.xyz/api/chests')
      .then(response => response.json())
      .then(data => this.setState({chests: data}));
  }
  selectCard = (e) => {
    for(let i = 0; i < this.state.cards.length; i++){
        if(this.state.cards[i].copyId == e.target.id){
            this.setState({card: this.state.cards[i]});
        }
    }
    this.setState({
                    cardSelected: true
                    });
  }
  removeCard = (e) => {
    if(this.state.deck.length > 0){
      for(let i = 0; i < this.state.deck.length; i++){
        if(this.state.deck[i].copyId == e.target.id){
          this.setState(state => {
            const deck = this.state.deck;
            deck.splice(i, 1);
            return deck;
            
          })
      }
    }
  }
    else{
      alert('Card is not in deck')
    }
  }
  goBack = () => {
    this.setState({
      cardSelected: false,
      search: ''
    });
  }
  goBackDeck = () => {
    this.setState({deckSelected: false});
  }
  showDeck = () => {
    this.setState({deckSelected: true})
  }
  searchCards = (e) => {
    this.setState({search: e.target.value });
  }
  addToDeck = () => {
    if(this.state.deck.length > 7){
        alert('Deck is full. 8 Card Maximum')
    }
    else{
        if(this.state.deck.length === 0){
            this.setState(state => {
                const deck = this.state.deck.push(this.state.card)
                return deck;
            });
        }
        else{
            let shouldBeDeck = true;
            for(let i = 0; i < this.state.deck.length; i++){
                if(this.state.deck[i].copyId == this.state.card.copyId){
                    alert('Already Selected This Card. Only 1 Per Card Allowed')
                    shouldBeDeck = false;
                }
            }
            if(shouldBeDeck){
                this.setState(state => {
                    const deck = this.state.deck;
                    deck.push(this.state.card);
                    return deck;
                    
                }
            );
        
            } 
        }
    }
  }
  render() {
    return (
        <div>
          <Nav 
            deck={this.state.deck}
            showDeck={this.showDeck}
            goBackDeck={this.goBackDeck}
            deckSelected={this.state.deckSelected}
            flashState={this.state.flashState}
            flashRemoveState={this.state.flashRemoveState}
          />
          <div className='fill-bg'>
            <Main 
              cards={this.state.cards}
              chests={this.state.chests}
              arenas={this.state.arenas}
              leagues={this.state.leagues}
              deck={this.state.deck}
              addToDeck={this.addToDeck}
              card={this.state.card}
              selectCard={this.selectCard}
              cardSelected={this.state.cardSelected}
              goBack={this.goBack}
              goBackDeck={this.goBackDeck}
              deckSelected={this.state.deckSelected}
              showDeck={this.showDeck}
              search={this.state.search}
              searchCards={this.searchCards}
              removeCard={this.removeCard}
              toggleFlash={this.toggleFlash}
              toggleRemoveFlash={this.toggleRemoveFlash}
              />
            <Footer /> 
           </div>
        </div>
    );
  }
}

export default App;
