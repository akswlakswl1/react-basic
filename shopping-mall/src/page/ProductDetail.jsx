import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/akswlakswl1/react-basic/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  }, [])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <h3>₩{product?.price}</h3>
          <div>{product?.choice === true ? "Consicous choice" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="Size">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail