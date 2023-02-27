import React, { useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";

const cities = ["Palani", "Dindigul", "Tirupati", "Vijayawada"];
const state = ["Tamilnadu", "kerala", "Andhra Pradesh", "Uttar Pradesh", "Odisha", "Bihar", "West Bengal", "Karnataka", "Jharkhand", "Manipur"]

const CartPage = ({ cart, setCart,totalPrice }) => {
  const [showModal, setShowModal] = useState(false);

  const removeFromCart = (id, price) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    const street = event.target.elements.street.value;
    const city = event.target.elements.city.value;
    const pincode = event.target.elements.pincode.value;
    const address = `${street}, ${city} - ${pincode}`;
    alert(`Thank you for your purchase! Your order will be shipped to ${address}.`);
    setCart([]);
    setShowModal(false);
  };

  const cityOptions = cities.map((city) => (
    <option key={city}>{city}</option>
  ));

  const stateOptions = state.map((state) => (
    <option key={state}>{state}</option>
  ));


  const cartItems = cart.map((item) => (
    <tr key={item.id}>
      <td>{item.product_name}</td>
      <td>{item.currency + item.price}</td>
      <td>
        <Button
          variant="danger"
          onClick={() => removeFromCart(item.id, item.price)}
        >
          Remove
        </Button>
      </td>
    </tr>
  ));

  return (
    <Container className="mt-4" style={{ backgroundColor: "royalblue" }}>
      <h1>Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </Table>
      <h3>Total Price: {totalPrice}</h3>
      <Button variant="primary" onClick={handleBuyClick} style={{backgroundColor:"lightgreen"}}>
        Buy
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} style={{marginTop:'10%'}}>
        <form onSubmit={handleAddressSubmit}>
          <Modal.Header >
            <Modal.Title className="text-center w-100">Enter your address</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <div className="row g-0">
              <div className="col-lg-3">
                <label>
                  Street Name
                </label>
              </div>
              <div className="col-lg-9">
                <span className="m-2">:</span><input type="text" name="street" required />
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-3">
                <label>
                  State
                </label>
              </div>
              <div className="col-lg-9">
                <span className="m-2">:</span><select name="State" required>
                  {stateOptions}
                </select>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-3">
                <label>
                  City
                </label>
              </div>
              <div className="col-lg-9">
                <span className="m-2">:</span><select name="city" required>
                  {cityOptions}
                </select>
              </div>
            </div>
           
            <div className="row g-0">
              <div className="col-lg-3">
                <label>
                  Pin code
                </label>
              </div>
              <div className="col-lg-9">
                <span className="m-2">:</span><input type="text" name="pincode" required />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button type="submit" >Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
      
    </Container>
  );
};

export default CartPage;