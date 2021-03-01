import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FindArtist from "./FindArtist";

const SearchField = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  console.log(value);

  const submitForm = () => {
    setValue(text);
  };
  return (
    <div>
      <Form>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Col>
            <Form.Control
              placeholder="Search here ....."
              onChange={(e) => setText(e.target.value)}
            />
          </Col>
          <Col>
            <Button onClick={submitForm}> Search</Button>
          </Col>
        </Row>
      </Form>
      <div>{value ? <FindArtist value={value} /> : null}</div>
    </div>
  );
};

export default SearchField;
