import React from 'react';
import {Card} from 'react-bootstrap';

export default function Header(props) {
    return (
      <Card bg={"warning"} style={{ width: '18rem', margin: 'auto auto 10px' }}>
        <Card.Body>
          <Card.Title>Turn</Card.Title>
          <Card.Text>
            {props.text}
            
          </Card.Text>
        </Card.Body>
      </Card>
    );
    }