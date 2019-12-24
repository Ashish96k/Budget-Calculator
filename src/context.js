import React, { Component } from 'react';
import uuid from 'uuid';

const BudgetContext = React.createContext();

const initialState = {
  list: [],
  id: uuid(),
  task: '',
  cost: '',
  editItem: false
};

class BudgetProvider extends Component {
  state = initialState;

  handelSubmit = e => {
    e.preventDefault();
    const updatedList = {
      id: this.state.id,
      task: this.state.task,
      cost: this.state.cost
    };
    const newList = [...this.state.list, updatedList];
    this.setState({
      list: newList,
      id: uuid(),
      task: '',
      cost: '',
      editItem: false
    });
  };

  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handelEdit = id => {
    const updateItem = this.state.list.find(item => item.id === id);
    const newList = this.state.list.filter(item => item.id !== id);
    this.setState({
      list: newList,
      id: updateItem.id,
      task: updateItem.task,
      cost: updateItem.cost,
      editItem: true
    });
  };

  handelDelete = id => {
    const newList = this.state.list.filter(item => item.id !== id);
    this.setState({
      list: newList
    });
  };

  clearList = () => {
    this.setState({
      ...initialState
    });
  };

  render() {
    return (
      <BudgetContext.Provider
        value={{
          ...this.state,
          handelChange: this.handelChange,
          handelSubmit: this.handelSubmit,
          clearList: this.clearList,
          handelDelete: this.handelDelete,
          handelEdit: this.handelEdit
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    );
  }
}

const BudgetConsumer = BudgetContext.Consumer;

export { BudgetProvider, BudgetConsumer, BudgetContext };
