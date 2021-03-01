import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FindArtist from "./FindArtist";
import "./Home.css";

const SearchField = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [token, setToken] = useState("");

  const getToken = async () => {
    fetch(`https://spotify-api-feb.herokuapp.com/token`)
      .then((res) => res.json())
      .then((data) => {
        setToken(data.access_token);
      });
  };

  useEffect(() => {
    if (token === "") {
      getToken();
    }
  }, []);

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
      <div>{value ? <FindArtist value={value} token={token} /> : null}</div>
    </div>
  );
};

export default SearchField;
