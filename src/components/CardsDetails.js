import React, { useEffect } from 'react';
import { Table } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CardsDetails = () => {

    // get data from url
    const {id}= useParams();
    console.log(id);

    //get data from redux store
    const getdata = useSelector((state) => state.cartreducer.carts);
     
    //cpmpare data from store and params
const compare=()=>{
    let comparedata=getdata.filter((e)=>{
        return e.id==id
    });
    console.log("comparedata",comparedata);
}

// when id is change then compare menthod is called
 useEffect(()=>{
    compare();
},[id])

    return (
        <>
            <div className='container mt-2'>
                <h2 className='text-center'>Items Details page</h2>

                <section className='container mt-3'>
                    <div className='iteamsdetails'>
                        <div className='items_img'>
                            <img src='https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp' />
                        </div>
                        <div className='details'>
                            <Table>
                                <tr>
                                    <td>
                                        <p><strong>Restuarant</strong>: Massala Theoryy</p>
                                        <p><strong>Price</strong>: ₹ 300</p>
                                        <p><strong>Dishes</strong>: North Indian, Birayni</p>
                                        <p><strong>Total</strong>: ₹ 300</p>

                                    </td>
                                   <td>
                                    <p><strong>Rating :</strong><span style={{background:'green', color:'#fff', padding:"2px 5px", borderRadius:'5px'}}> 3.5 ★</span></p>
                                    <p><strong>Order Review :</strong><span style={{}}>1175 + order Placed</span></p>
                                    <p><strong>Remove :</strong><span style={{}}><i className='fas fa-trash' style={{color:'red', fontSize:'20', cursor:'pointer'}}></i></span></p>
                                    </td> 
                                </tr>
                            </Table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardsDetails