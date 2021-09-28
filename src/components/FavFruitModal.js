import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class FavFruitModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Fruit</Modal.Title>
          </Modal.Header>
            <Form onSubmit={this.props.updateDataFunction}>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" defaultValue={this.props.name} />
                <Form.Text className="text-muted" ></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>photo</Form.Label>
                <Form.Control type="text" name="image"  defaultValue={this.props.image}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" defaultValue={this.props.price} />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleModalClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Modal.Footer>
            </Form>
        </Modal>
      </>
    );
  }
}

export default FavFruitModal;
