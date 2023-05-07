import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import { Context } from "../index";
import {Form, Card, Row, Col, Image} from 'react-bootstrap'
import star from '../assets/Star.png'
const DeviceItem = ({device}) => {
    return (
      <Col md={3} className={"mt-3"}>
         <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
            <Image width={150} height={150} src={device.img} />
            <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                <div>Sumsung....</div>
                <div className="d-flex align-items-center">
                    <div>{device.rating}</div>
                    <Image width={15} height={15} src={star}/>
                </div>
            </div>
            <div>{device.name}</div>
         </Card>
      </Col>
    );
  }
  
  export default DeviceItem;