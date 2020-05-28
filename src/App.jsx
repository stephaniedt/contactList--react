import React from 'react';
import './App.scss';
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

class App extends React.Component {


  constructor() {
    super();
    this.state = {
        contacts: [],
        searchList: [],
        searchValue: ""
    }
  }

 

  async componentDidMount(){
      let contacts = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      contacts = await contacts.json();
      this.setState({ contacts, searchList: contacts });
    };
  
  handleChange = ({ target }) => {
    const { searchList } = this.state;
    this.setState({ searchValue: target.value })
    let search = searchList.filter(contact => contact.name.toLowerCase().includes(target.value.toLowerCase()))
    this.setState({contacts: search})
  };

  handleClick = (order) => {

    const { contacts } = this.state  ;
    
    const list = contacts.sort((a, b) => a[order].localeCompare(b[order]));
    this.setState({
      contacts: list,
      isClicked: order 
    })

  };

  render() {

    const { contacts } = this.state

    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters 
        handleChange={ this.handleChange }
        handleClick={this.handleClick} 
        value={ this.searchValue }
        isClicked = {this.state.isClicked }
        />
        <Contacts contacts = { contacts }>
        {contacts && contacts.map(contact => (
							<Contact 
									contact={contact} 
									key={contact.id}
								/>
							))}
        </Contacts>
      </div>
    )
  }
}

export default App;
