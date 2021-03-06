import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FormComponent = ({ handleSubmit, handleChange, primeRange }) => {
  return (
    <>
      <h4>Prime Number Multiplication Table</h4>
      <p>
        World's simplest prime number multiplication table generator. Just press
        Generate Table button, and you get{' '}
        <span className="attention">
          the first 10 prime numbers multiplication table.
        </span>{' '}
        Press button, get primes. No ads, nonsense or garbage.
      </p>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="start">Range Start</Label>
              <Input
                type="number"
                name="start"
                id="start"
                placeholder="From"
                value={primeRange.start}
                onChange={(event) => handleChange(event)}
                rounded={0}
                style={{ borderRadius: 0 }}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="end">How Many</Label>
              <Input
                type="number"
                name="max"
                id="end"
                placeholder="To"
                value={primeRange.max}
                onChange={(event) => handleChange(event)}
                style={{ borderRadius: 0 }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="warning" style={{ borderRadius: 0 }} block>
          Generate Table
        </Button>{' '}
      </Form>
    </>
  );
};

export default FormComponent;
