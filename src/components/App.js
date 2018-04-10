import React from 'react';
import '../assets/stylesheets/components/App.scss';
import NavigationBar from './NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div className="fluid-container">
        {/* <NavigationBar /> */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
