import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import FavFruitList from './FavFruitList'
import FavFruitModal from './FavFruitModal';
import Row from "react-bootstrap/Row";
import './FavFruit.css'

class FavFruit extends React.Component {

  constructor(props){
    super(props)
    this.state={
      dataArray:[],
      showModalFlag:false,
      name:'',
      image:'',
      price:'',
      id:'',
    }
  }

  componentDidMount=()=>{
    console.log("hello")
    const {user}=this.props.auth0
    const email=user.email

    axios
    .get(`https://ramiexam301.herokuapp.com/getmongodata?email=${email}`)
    .then(result=>{
      this.setState({
        dataArray:result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })

  }
  
  showModalFunction=(item)=>{
    this.setState({
      showModalFlag:true,
      name:item.name,
      image:item.image,
      price:item.price,
      id:item._id
    })
  }
  handleModalClose=()=>{
    this.setState({
      showModalFlag:false,
    })
  }

  updateDataFunction=(event)=>{
    event.preventDefault();
    const {user}=this.props.auth0
    const email=user.email
    const obj={
      name:event.target.name.value,
      image:event.target.image.value,
      price:event.target.price.value,
      email:email
    }
    axios
    .put(`https://ramiexam301.herokuapp.com/updatedata/${this.state.id}`,obj)
    .then(result=>{
      this.setState({
        dataArray:result.data,
        showModalFlag:false
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  deleteDataHandler=(id)=>{
    const {user}=this.props.auth0
    const email=user.email
    axios
    .delete(`https://ramiexam301.herokuapp.com/deletedata/${id}?email=${email}`)
    .then(result=>{
      this.setState({
        dataArray:result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }


  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
        <Row xs={1} md={3} className="g-4">
        {this.state.dataArray.map(item=>{
          return <FavFruitList
           item={item}
           showModalFunction={this.showModalFunction}
           deleteDataHandler={this.deleteDataHandler}

           />
        })}
        </Row>
        <FavFruitModal
        show={this.state.showModalFlag}
        handleModalClose={this.handleModalClose}
        name={this.state.name}
        image={this.state.image}
        price={this.state.price}
        updateDataFunction={this.updateDataFunction}
        
        />
      </>
    )
  }
}

export default withAuth0(FavFruit);
