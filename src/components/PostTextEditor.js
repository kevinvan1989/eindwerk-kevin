import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class PostTextEditor extends Component {
  render() {
    const { setFieldValue, values } = this.props;
    console.log(this.props);
    return (
      <div>
        <CKEditor
          editor={ClassicEditor}
          data={values.PostEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setFieldValue("PostEditor", data);
          }}
        />
      </div>
    );
  }
}
