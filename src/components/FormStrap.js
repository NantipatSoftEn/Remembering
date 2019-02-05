import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const  FromStrap =  ({})  => (
    <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
)
export default FromStrap;