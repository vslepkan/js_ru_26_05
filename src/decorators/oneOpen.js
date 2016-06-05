import React, { Component } from 'react'

export default (CustomComponent) => class DecoratedComponent extends Component {
  
  state = {
    openedArticle: null
  };

  openedArticle = id => ev => {
    this.setState({
      openedArticle: this.state.openedArticle == id ? null : id
    })
  };

  isOpen = id => this.state.openedArticle == id;
  
  render() {
    
    return <CustomComponent {...this.props} isOpen = {this.isOpen} openedArticle = {this.openedArticle}/>
    
  }
  
}