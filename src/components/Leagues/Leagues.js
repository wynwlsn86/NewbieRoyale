import React, { Component } from 'react';

class Leagues extends Component {
    render() {
        return (
            <div className='league-main'>
                <h1 className='page-heading center-heading'>Leagues</h1>
                {
                    this.props.leagues.map( league => 
                        <div
                            key={league.idName}
                            >
                            <img  className='league-img' src={`http://www.clashapi.xyz/images/leagues/${league.idName}.png`} alt='' />
                            <div className='chest-list'>
                                <div>{league.name}</div>
                                <div>Victory Gold: {league.victoryGold}</div>
                                <div>Trophy Requirement: {league.minTrophies}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Leagues;