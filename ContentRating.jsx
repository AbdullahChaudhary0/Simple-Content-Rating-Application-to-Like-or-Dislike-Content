
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislike: 0,
        handleLike: () => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1
            }));
        },

        handleDislike: () => {
            this.setState((prevState) => ({
                dislike: prevState.dislike + 1
            }));
        }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>Choosing between Vite and Create React App (CRA) is pivotal in 2024. While CRA offers simplicity and strong React support, Vite stands out for speed and flexibility. Vite's quick build and hot reloading, along with multi-framework support, make it ideal for larger projects.</p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislike})
          </button>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
