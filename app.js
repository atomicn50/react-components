
// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );

// var GroceryList = () => (
//     <GroceryListItem groceryItems={['Kale', 'Cucumbers']}/> // Here we are creating an instance of the `TodoList` component
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  
  render() {
    var style = {
      textDecoration: this.state.done ? 'bold' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul> 
    {props.groceryItems.map(groceryItem => 
      <GroceryListItem groceryItems={['Kale', 'Cucumbers']} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));cc





