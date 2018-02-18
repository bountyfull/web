import React, { Component } from "react";
import { CardWrapper, CardHeader, CardBody } from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import { Link } from "react-router-dom";

class Home extends Component {
  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <CardWrapper>
              
              <CardBody>
              <form>
              	What is your name?
              	<Input               
              	  onChange={this.handleInputChange}
              	  name="search_term"
              	/>
                What vegetable do you want to put a bounty on?
                <Input               
                  onChange={this.handleInputChange}
                  name="search_term"
                />
                What price (USD) will you put on this bounty? 
                <Input
                  onChange={this.handleInputChange}
                  name="limit"
                />
                When does this bounty expire?
            	<select className="w-100 btn btn-lg btn-outline-dark dropdown-toggle" name="expirationTimeDelta" >
            	    <option value="86400">1 day</option>
            	    <option value="259200">3 days</option>
            	    <option value="604800">1 week</option>
            	    <option value="1209600">2 weeks</option>
            	    <option value="2592000">1 month</option>
            	    <option value="7776000">3 months</option>
            	    <option value="15552000">6 months</option>
            	    <option value="31536000" selected="">1 year</option>
            	    <option value="9999999999">Never</option>
            	</select><br />


                Are there any other notes you want to include with this bounty? 
                <Input
                  onChange={this.handleInputChange}
                  name="limit"
                />
                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                  Start Bounty
                </FormBtn>
              </form>
              </CardBody>
            </CardWrapper>
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
    );
  }
}

export default Home;