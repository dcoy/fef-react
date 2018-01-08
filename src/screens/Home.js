import React from 'react';
import Header from '../components/Header';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends React.Component {

  state = {
    search: this.props.match.params.username || 'obsidianspork',
    user: [],
    repos: []
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.search}`)
      .then(res => res.json())
      .then(user => this.setState({ user: user }))
      .catch(err => console.log(err))

    fetch(`https://api.github.com/users/${this.state.search}/repos`)
      .then(res => res.json())
      .then(repos => this.setState({ repos: repos }))
      .catch(err => console.log(err))
  }

  onSearch(value) {
    fetch(`https://api.github.com/users/${value}`)
    .then( res => res.json() )
    .then( results => this.setState({ results: results }))
    .catch( err => console.log(err) )
  }

  render() {
    console.log(this.state.results);
    return (
      <div>
        <Header onSearch={ this.onSearch.bind(this) } />
        <Grid>
          <Row>
            <Col sm={5} md={4} lb={3}>
              <h3>
                {this.state.user.name}
              </h3>
              <p>
                {this.state.user.bio}
              </p>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row className="show-grid">
            <Col sm={7} md={8} lg={9}>
              {this.state.repos.map((repo, index) => (
                <Col key={index} lg={6}>
                  <h4>
                    <a href={repo.html_url}>{repo.name}</a></h4>
                  <p>
                    {repo.description}
                  </p>
                </Col>
              ))}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home;