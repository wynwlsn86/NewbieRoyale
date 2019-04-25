import React, { Component } from 'react';
import SelectedCard from '../SelectedCard/SelectedCard'
import Search from '../Search/Search'
import Deck from '../Deck/Deck'

class Cards extends Component {
    constructor() {
        super();
        this.state= {
            select: ''
        }
    }
    
    render() {
        if(this.props.deckSelected === true){
            return (
            <Deck 
                goBack={this.props.goBackDeck}
                deck={this.props.deck}
                removeCard={this.props.removeCard}
            />
            )
        }
        else if(this.props.cardSelected === true){
            return (
                <SelectedCard 
                    card={this.props.card}
                    goBack={this.props.goBack}
                    cardSelected={this.state.cardSelected}
                    addToDeck={this.props.addToDeck}
                    removeCard={this.props.removeCard}
                    toggleFlash={this.props.toggleFlash}
                    toggleRemoveFlash={this.props.toggleRemoveFlash}
                    deck={this.props.deck}
                />
            )
        
        }
        else{
            return (
                <div className='cards-main'>
                    <h1 className='page-heading center-heading'>Cards</h1>
                    <Search 
                        search={this.props.searchCards}
                        clear={this.clear}
                        selectCard={this.props.selectCard}
                        />
                    <button id='input-style'onClick={this.props.showDeck}>View Deck</button>
                    <div className='flex-list'>
                        {
                            this.props.cards.filter(card => {
                                return card.name.toLowerCase().includes(this.props.search.toLowerCase());
                            }).map((card, id) => 
                                <div
                                id={card.copyId}
                                className='card-list box'
                                key={card.idName}
                                onClick={this.props.selectCard}
                                >
                                    {card.name}
                                </div>
                            )
                        }
                    </div>
                </div>
            );
        }

    }
}

export default Cards;

