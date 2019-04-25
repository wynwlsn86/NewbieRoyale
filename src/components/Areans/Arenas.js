import React, { Component } from 'react';

class Arenas extends Component {
    render() {
        return (
            <div className='arena-main'>
                <h1 className='center-heading page-heading'>Arenas</h1>
                {
                this.props.arenas.map( arena => 
                    <div
                    className='arena-flex'
                    key={arena.idName}
                    >
                    <img  className='arena-img' src={`http://www.clashapi.xyz/images/arenas/${arena.idName}.png`} alt='' />
                    <div className='arena-box'>
                        <div>{arena.name}</div>
                        <div>Victory Gold: {arena.victoryGold}</div>
                        <div>Required Trophies: {arena.minTrophies}</div>
                    </div>
                </div>
                )
                }
            </div>
        );
    }
}

export default Arenas;