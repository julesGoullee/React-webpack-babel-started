import React, {
  Component,
  PropTypes
} from 'react';
import Potatoe from '../component/potatoe';
import { addPotatoe } from '../actions/potatoes';
import { connect } from 'react-redux';

class PotatoesContainer extends Component {

  onClick(potatoe, e){

    e.preventDefault();

    this.props.addPotatoe(potatoe);

  }

  getPotatoe(potatoe){

    return (
      <div
        key={potatoe.name}
        onClick={this.onClick.bind(this, potatoe)}
      >
        <Potatoe
          img={potatoe.img}
          name={potatoe.name}
        />
      </div>
    );

  }

  render(){

    return (
      <div>
        <div>{this.props.currentMash.reduce( (acc, mash) => `${acc} ${acc === '' ? '' : ' - '} ${mash.name}`, '')}</div>
        <div>{this.props.potatoes.map(this.getPotatoe.bind(this) )}</div>
      </div>
    );

  }

}

PotatoesContainer.propTypes = {
  addPotatoe: PropTypes.func.isRequired,
  currentMash: PropTypes.array.isRequired,
  potatoes: PropTypes.array.isRequired
};

const mapStateToProps = ({ potatoes, currentMash }) => ({
  potatoes, currentMash
});

const mapDispatchToProps = { addPotatoe };

export default connect(mapStateToProps, mapDispatchToProps)(PotatoesContainer);
