import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class FavFruitList extends Component {
  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.item.image} />
            <Card.Body>
              <Card.Title>{this.props.item.name}</Card.Title>
              <Card.Text>{this.props.item.price}</Card.Text>
              <Button onClick={()=>{this.props.showModalFunction(this.props.item)}} variant="primary">
                Update
              </Button>
              <Button onClick={()=>{this.props.deleteDataHandler(this.props.item._id)}} variant="primary" className="deletebtn">
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default FavFruitList;
