import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HomeList from './HomeList';
import Row from 'react-bootstrap/Row'
import { withAuth0 } from '@auth0/auth0-react';


class Home extends React.Component {

  constructor(props){
    super(props)
    this.state={
      dataArray:[],
      addedData:[]
    }
  }
  

  componentDidMount=()=>{
    axios
    .get("https://ramiexam301.herokuapp.com/fruit")
    .then(result=>{
      this.setState({
        dataArray:result.data
      })
      console.log(this.state.dataArray);
    })
    .catch(err=>{
      console.log(err);
    })
  }


  addDataFunction=(item)=>{
    const {user}=this.props.auth0
    const email=user.email

    const obj={
      name:item.name,
      image:item.image,
      price:item.price,
      email:email
    }
    axios
    .post('https://ramiexam301.herokuapp.com/addfruit',obj)
    .then(result=>{
      this.setState({
        addedData:result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <Row xs={1} md={3} className="g-4">
        {this.state.dataArray.map(item=>{
          return <HomeList
           item={item}
           addDataFunction={this.addDataFunction}
           />
        })}
        </Row>
      </>
    )
  }
}

export default withAuth0(Home);
