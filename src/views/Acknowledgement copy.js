import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

contstructor(props) {
  super(props);
  this.state = {
    import_method: []
    source: {}
  };
}

componentDidMount() {
  this.setState ({
    import_method: [
      {id: 'Up', name: 'Upload'},
      {id: 'Store', name: 'Stored Population'},
      {id: 'API', name: 'API' }
    ]
  });
}

render () {
  const {import_method} = this.state;

  let methodList = method.length > 0
    && countries
}
function Acknowledgement () {
  return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Populations</CardTitle>
                  <CardBody>
                    <row>
                      
                        <UncontrolledDropdown>
                          <DropdownToggle
                          caret
                          color="secondary"
                          id="ComparisonRoster"
                          type="button"
                          >
                          Employee Roster
                          </DropdownToggle>

                          <DropdownMenu aria-labelledby="ComparisonRoster">
                          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Upload
                          </DropdownItem>

                          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Stored Employee Roster
                          </DropdownItem>

                          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            ADP API
                          </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      
                      
                  </row>
                    
                  </CardBody>
                </CardHeader>
              </Card>
            </Col> 
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Configs</CardTitle>
                  <CardBody>
                  <label className="custom-toggle custom-toggle-primary">
                    <input type="checkbox" checked=""/>
                    <span className="custom-toggle-slider rounded-circle" data-label-off="OFF" data-label-on="ON"></span>
                  </label>
                  </CardBody>
                </CardHeader>
              </Card>
            </Col>          
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Results</CardTitle>
                  <CardBody>

                  </CardBody>
                </CardHeader>
              </Card>
            </Col>          
          </Row>
        </div>
      </>
  );
}

export default Acknowledgement

/*
<h5>
12 <br />
<small>Files</small>
</h5>
<a
href="https://groovebot.io"
className="simple-text logo-normal"
>
GrooveBot.io
</a>
*/