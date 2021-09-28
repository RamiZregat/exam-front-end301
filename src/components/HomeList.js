import React, { Component } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class HomeList extends Component {
  render() {
    return (
      <>
       <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.item.image} />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
              {this.props.item.price}
            </Card.Text>
            <Button onClick={()=>{this.props.addDataFunction(this.props.item)}} variant="primary">Add to Favourite</Button>
          </Card.Body>
        </Card>
        </Col>
      </>
    );
  }
}

export default HomeList;
