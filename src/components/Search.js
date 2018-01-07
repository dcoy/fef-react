import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

class Search extends React.Component {
  state = {
    search: '',
    repos: [],
    user: [],
    results: []
  }
  
  searchGithub = () => {
    fetch(`https://api.github.com/search/users?q=${this.state.search}`)
      .then( res => res.json() )
      .then( results => this.setState({ results: results.items }) )
      .catch( err => console.log(err) )
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
  };
  
  
  render() {
    const { from } = window.location.pathname || '/';
    const { fireRedirect } = this.state;

    return(
      <div>
        <Form inline>
          <FormGroup>
            <FormControl type="text"
                         onSubmit={ this.handleSubmit }
                         placeholder="Search Github"
                         value={ this.state.search }
                         onChange = { search => this.setState({
                           search: search.target.value
                        })}>
            </FormControl>
          </FormGroup>
        </Form>
        { fireRedirect && (
          <Redirect to={ from || '/search/' + this.state.search } />
        )}
    </div>
    )
  }
}

export default Search;