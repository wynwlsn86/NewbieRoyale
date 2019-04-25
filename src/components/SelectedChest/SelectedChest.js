import React, { Component } from 'react';

class SelectedChest extends Component {
    render() {
        return (
            <div className='chests-main'>
                <div className='chest-bg'>
                    <button onClick={this.props.goBack}>Back</button>
                    Card
                    <div>{this.props.chest.name}</div>
                    <img src={`http://www.clashapi.xyz/images/chests/${this.props.chest.idName}.png`} alt='' />
                    <div>{this.props.chest.elixirCost}</div>
                    <div>{this.props.chest.type}</div>
                    <div>{this.props.chest.rarity}</div>
                    <div>{this.props.chest.description}</div>
                </div>
            </div>
            );
        }
}

export default SelectedChest;


// http://www.clashapi.xyz/images/chests/super-magical-chest.png