import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Cardsdata from './CardsData';
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from './redux/actions/actions';

const Cards = () => {
    const [data, setData] = useState(Cardsdata);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => {
        setShowModal(true);
        // Auto-close the modal after 3 seconds
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    const send = (e) => {
        dispatch(ADD(e));
        handleShow(); // Show the modal when item is added to the cart
    };

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add To Cart Project</h2>
            <div className='row d-flex justify-content-center align-items-center' >
                {data.map((element, id) => (
                    <Card key={id} style={{ width: '22rem', border: "none" }} className='mx-2 mt-4 card_style'>
                        <Card.Img variant="top" className='mt-3' src={element.imgdata} style={{ height: "16rem" }} />
                        <Card.Body>
                            <Card.Title>{element.rname}</Card.Title>
                            <Card.Text>
                                Price: ₹ {element.price}
                            </Card.Text>
                            <div className='button_div d-flex justify-content-center'>
                                <Button onClick={() => send(element)} variant="dark" className='col-lg-12'>Add to Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>

          {/* Bootstrap Modal */}
          <Modal show={showModal} backdrop={false} keyboard={false} onHide={handleClose}>
                <Modal.Header closeButton className='mx-4 my-0 text-center text-success'>
                    Item is added into the cart successfully.
                </Modal.Header>
            </Modal>
        </div>
    );
}

export default Cards;
