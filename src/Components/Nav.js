import React, { Component} from 'react';
import { Link } from 'react-router-dom';
//import store from '../store';
import { connect } from 'react-redux';

/*
class Nav extends Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    store.subscribe(()=> {
      this.setState(store.getState());
    });
  }
  render(){
    const { location } = this.props;
    const { foo, bar } = this.state;
    return (
      <_Nav location={ location } foo={ foo } bar = { bar } />
    );
  }
}
*/


const Nav = ({ location, foo, bar })=> {
  const { pathname } = location;

  return (
    <ul>
      <li>
        {
          pathname === '/foo' ? ( foo.name ) : (
            <Link to='/foo'>{ foo.name }</Link>
          )
        }
      </li>
      <li>
        {
          pathname === '/bar' ? ( bar.name ) : (
            <Link to='/bar'>{ bar.name }</Link>
          )
        }
      </li>
    </ul>
  );
}

const mapStateToProps = ({ foo, bar })=> {
  return {
    foo,
    bar
  };
};

export default connect(mapStateToProps)(Nav);
