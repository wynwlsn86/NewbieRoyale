import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import Home from '../Home/Home'
import Cards from '../Cards/Cards'
import Chests from '../Chests/Chests'
import Arenas from '../Areans/Arenas'
import Leagues from '../Leagues/Leagues'

class Main extends Component {
    render() {
        return (
            <main>
                <Route exact path='/' component={Home} />
                <Route 
                    path='/Cards' 
                    render={() => 
                    <Cards 
                        cards={this.props.cards}
                        deck={this.props.deck}
                        addToDeck={this.props.addToDeck}
                        card={this.props.card}
                        selectCard={this.props.selectCard}
                        cardSelected={this.props.cardSelected}
                        goBack={this.props.goBack}
                        showDeck={this.props.showDeck}
                        deckSelected={this.props.deckSelected}
                        goBackDeck={this.props.goBackDeck}
                        search={this.props.search}
                        searchCards={this.props.searchCards}
                        removeCard={this.props.removeCard}
                        toggleFlash={this.props.toggleFlash}
                        toggleRemoveFlash={this.props.toggleRemoveFlash}
                />} />
                <Route 
                    path='/Chests' 
                    render={() => 
                    <Chests
                        chests={this.props.chests}
                />} />
                <Route 
                    path='/Arenas' 
                    render={() => 
                    <Arenas 
                        cards={this.props.cards}
                        arenas={this.props.arenas}
                />} />
                <Route 
                    path='/Leagues' 
                    render={() => 
                    <Leagues 
                        leagues={this.props.leagues}
                />} />
            </main>
        );
    }
}

export default Main;