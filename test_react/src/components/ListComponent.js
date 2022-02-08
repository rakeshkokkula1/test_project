import React from "react";
import { ListGroup } from "react-bootstrap";

function ListComponent({ data = [] }) {
  return (
    <ListGroup as="ol" numbered className="col-md-6">
      {data.map((i) => {
        return (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{i.name}</div>
              <div style={{ textAlign: "start" }}>@{i.username}</div>
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default ListComponent;
