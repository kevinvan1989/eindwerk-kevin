import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ErrorMessage, Form } from "formik"
import Formgroup from "./Forms/Formgroup";
import Button from "./Button";

export default class PostTextEditor extends Component {
  render() {
    const { setFieldValue, values } = this.props;
    console.log(this.props);
    return (
      <div>
        <Form>
          <Formgroup
            type="text"
            typeOfInfo="CREATE_POST_title"
            title="Post title"
          />
        <CKEditor
          editor={ClassicEditor}
          data={values.CREATE_POST_editor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFieldValue("CREATE_POST_editor", data);
          }}
        />
        <Button type="submit" btnText="Add post"/>
        </Form>
      </div>
    );
  }
}
