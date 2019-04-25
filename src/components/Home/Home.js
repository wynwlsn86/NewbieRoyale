import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState: true
    }
  }
  closeModal = () => {
    this.setState({modalState: false})
  }
    render() {
      const toggleModal = this.state.modalState === true ? ' modal is-active' : 'modal';
        return (
          <div className='home-bg'>
            <div className={toggleModal}>
                  <div class="modal-background"></div>
                  <div class="modal-content">
                    <div className='inside-modal-stuff'>
                    <p>Welcome to Newbie Royale</p>
                    <li>In Cards, you can search and view cards</li>
                    <li>Add cards to your deck and buid a winner!</li>
                    <li>Decks must have no more, and no less than 8 cards to be complete</li>
                    </div>
                    
                  </div>
                <button class="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
              </div>
                <div className=" tile is-ancestor">
                  <div className=" tile is-parent is info link-margin">
                    <Link  className='white-text tile-length' to='/Cards'>
                      <article className=" tile  is-child box is-info">
                        Cards
                      </article>
                  </Link>
                  </div>
                  <div className="tile is-parent link-margin">
                    <Link  className='white-text tile-length' to='/Chests'>
                      <article className="tile is-child box">
                        Chests
                      </article>
                    </Link>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-parent link-margin">
                    <Link  className='white-text tile-length' to='/Arenas'>
                      <article className="tile is-child box">
                        Arenas
                      </article>
                    </Link>
                  </div>
                  <div className="tile is-parent link-margin">
                    <Link  className='white-text tile-length' to='/Leagues'>
                      <article className="tile is-child box">
                        Leagues
                        </article>
                    </Link>
                  </div>
                </div>
            </div>
        );
    }
}

export default Home;