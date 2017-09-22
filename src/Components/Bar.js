import React from 'react';
import { updateBarActionCreator} from '../store';
import { connect } from 'react-redux';

const Bar = ({ bar, updateBar })=> {
  return (
    <div onClick={ updateBar } >{ bar.name }</div>
  );
}

const mapStateToProps = ({ bar })=> {
  return {
    bar
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    updateBar: ()=> dispatch(updateBarActionCreator())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bar);
