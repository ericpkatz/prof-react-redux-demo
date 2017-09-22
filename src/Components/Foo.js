import React from 'react';
import { connect } from 'react-redux';
import { updateFooActionCreator } from '../store';


const Foo = ({ foo, updateFoo })=> {
  return (
    <div onClick={ updateFoo }>{ foo.name }</div>
  );
}

const mapStateToProps = ({ foo })=> {
  return {
    foo
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    updateFoo: ()=> dispatch(updateFooActionCreator())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Foo);
