import React, { Component } from 'react';

class Deck extends Component {
    render() {
        return (
            <div className='cards-main'>
                <h1 className='page-heading center-heading'>Deck</h1>
                <button onClick={this.props.goBack}>Back</button>
                <div className='deck-box'>
                    {
                        this.props.deck.map(card => {
                            return <div>
                                        <img className='card-deck' src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`} alt=''></img>
                                        <button className='remove-button-deck' id={card.copyId} onClick={this.props.removeCard}>REMOVE</button>
                                    </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Deck;