import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat, index) =>
      <Flat key={index}
            name={flat.name}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            imageUrl={flat.imageUrl}
            lat={flat.lat}
            lng={flat.lng}
            selected={flat.name === this.props.selectedFlat.name}
            selectFlat={this.props.selectFlat}
             />
    )
  }

  render() {
    return(
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
