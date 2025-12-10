import { Button, Col, Form } from "react-bootstrap";

export const Bar = () => {
  return (
    <>
      <div className="bar ">
        <Form>
          <div className="flex ">
            <Form.Control required type="text" placeholder="Add Your Task" />
            <Button type="submit">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
