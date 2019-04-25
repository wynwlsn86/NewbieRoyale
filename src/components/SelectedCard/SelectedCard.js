import React, { Component } from 'react';

class SelectedCard extends Component {
    changeThings = () => {
        this.props.toggleFlash();
        this.props.addToDeck();
        setTimeout(this.props.toggleFlash, 500);
    }
    showDelete = () => {
        for(let i = 0; i < this.props.deck.length; i++){
            if(this.props.card.copyId == this.props.deck[i].copyId){
                return <button className='remove-button-selected-cards' onClick={this.props.removeCard} id={this.props.card.copyId}>REMOVE</button>
            }
        }
    }
    render() {
        return (
        <div className='cards-main'>
            <div className='card-bg'>
                <button className='back-button' onClick={this.props.goBack}>Back</button>
                <button className='back-button' onClick={this.changeThings}>Add To Deck</button>
                <div className=' selected-card '>
                    {this.showDelete()}
                    <div><h1>{this.props.card.name}</h1></div>
                    <img src={`http://www.clashapi.xyz/images/cards/${this.props.card.idName}.png`} alt='' />
                    <div>{this.props.card.elixirCost}</div>
                    <div>{this.props.card.type}</div>
                    <div>{this.props.card.rarity}</div>
                    <div>{this.props.card.description}</div>
                </div>
            </div>
        </div>
        );
    }
}

export default SelectedCard;