import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
      const toggleFlash = this.props.flashState === true ? 'flash-ani' : 'cards-in-deck';
      const toggleRemoveFlash = this.props.toggleRemoveFlash === true ? 'flash-ani-remove' : 'cards-in-deck';
        return (
          <nav class="nav-bar is-link navbar" role="navigation" aria-label="main navigation">
            <div className='container'>
              <img className='navbar-brand' src='https://clashroyale.com/uploaded-images-blog/_232x109_crop_center-center_90/logo-1.png?mtime=20180403175110' alt='' />
              <Link className='navbar-item is-size-3'
                    to='/'>Home</Link>
              <Link className='navbar-item is-size-3'
                    to='/Cards'>Cards</Link>
              <Link className='navbar-item is-size-3'
                    to='/Chests'>Chests</Link>
              <Link className='navbar-item is-size-3'
                    to='/Arenas'>Arenas</Link>
              <Link className='navbar-item is-size-3' 
                    to='/Leagues'>Leagues</Link>
              </div>
              <Link onClick={this.props.showDeck} to='/Cards'><h1 className={` ${toggleFlash} ${toggleRemoveFlash}`}>Cards In Deck: {this.props.deck.length} <br />* 8 Cards Required *</h1></Link>
            </nav>
        );
    }
}

export default Nav;