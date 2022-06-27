import React, { useRef } from 'react';
import '../assets/styles/components/RichInput.scss';
import tinymce from 'tinymce/tinymce';
import BundledEditor from '../BundledEditor';
import { useSelector } from 'react-redux';

export default function RichInputThread() {
  const editorRef = useRef(null);
  const { socket, messageId } = useSelector((state) => state.socketReducer);
  const { _id, fullName, image } = useSelector(
    (state) => state.userReducer.user
  );

  const log = () => {
    socket.emit('sendMessageThread', {
      to: messageId,
      from: _id,
      fullName: fullName,
      image: image,
      message: editorRef.current.getContent(),
    });
    editorRef.current.setContent('');
  };

  return (
    <>
      <div className="rich__input-container">
        <button className="rich__input-btn" onClick={log}>
          <i className="bx bx-send"></i>
        </button>
      </div>
      <div className="container-rich">
        <BundledEditor
          onKeyDown={(e) => {
            if(e.shiftKey && e.key === 'Enter') {

            }
            else if (e.key === 'Enter') {
              log();
            }
          }}
          onKeyUp={(e) => {
            if(e.shiftKey && e.key === 'Enter') {
            }
            else if (e.key === 'Enter') {
              editorRef.current.setContent('');
            }
          }}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
            selector: 'textarea#file-picker',
            plugins: 'image code lists emoticons autoresize',
            toolbar:
              'undo redo | emoticons | link image | code | bold italic forecolor | outdent indent ',
            menubar: false,
            /* enable title field in the Image dialog*/
            image_title: true,
            /* enable automatic uploads of images represented by blob or data URIs*/
            automatic_uploads: true,
            autoresize_bottom_margin: 0,
            max_height: 150,
            autoresize_overflow_padding: 0,
            /*
              URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
              images_upload_url: 'postAcceptor.php',
              here we add custom filepicker only to Image dialog
            */
            file_picker_types: 'image',
            /* and here's our custom image picker*/
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');

              /*
                Note: In modern browsers input[type="file"] is functional without
                even adding it to the DOM, but that might not be the case in some older
                or quirky browsers like IE, so you might want to add it to the DOM
                just in case, and visually hide it. And do not forget do remove it
                once you do not need it anymore.
              */

              input.onchange = function () {
                var file = this.files[0];

                var reader = new FileReader();
                reader.onload = function () {
                  /*
                    Note: Now we need to register the blob in TinyMCEs image blob
                    registry. In the next release this part hopefully won't be
                    necessary, as we are looking to handle it internally.
                  */
                  var id = 'blobid' + new Date().getTime();
                  var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                  var base64 = reader.result.split(',')[1];
                  var blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);

                  /* call the callback and populate the Title field with the file name */
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              };

              input.click();
            },
            content_style: 'element.style {max-height: 200px}',
          }}
        />
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: data }}></div> */}
    </>
  );
}
