import React from "react"
import Dropzone from 'react-dropzone'
import { connect } from "react-redux"

class DragNDropContainers extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone  style={{
              width: "800px",
              height: "423px",
              border: "dashed 1px red"
            
            }}
             onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
        
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} : {f.size} bytes</li>)
            }
          </ul>
        </aside>
        </Dropzone>
        </div>
      </section>
    );
  }
}


export default connect () (DragNDropContainers)

