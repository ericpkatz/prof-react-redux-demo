import React from 'react';
import { updateFooActionCreator, updateBarActionCreator } from '../store';
import { connect } from 'react-redux';

const Controls = ({changeFoo, changeBar})=> {
  const changeFooAndBar = ()=>{
    changeFoo();
    changeBar();
  }
  return (
    <ul>
      <li>
        <a onClick= { changeFoo }>Change Foo</a>
      </li>
      <li>
        <a onClick= { changeBar }>Change Bar</a>
      </li>
      <li>
        <a onClick= { changeFooAndBar }>Change Foo And Bar</a>
      </li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch)=> {
  return {
    changeFoo: ()=> dispatch(updateFooActionCreator()),
    changeBar: ()=> dispatch(updateBarActionCreator())
  };
};

export default connect(null, mapDispatchToProps)(Controls);
