import React from 'react';
import './App.css';
import { FormGroup, FormLabel }  from 'react-bootstrap';

const marked = require('marked');

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      input: '# Heading of font-size h1\n## Heading of font-size h2 \n[This is a Link](https://github.com/SyedZawwarAhmed) \n\nThis is some inline code `<div></div>` between backticks \n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == "```" && lastLine == "```") {\n\t\treturn multiLineCode;\n\t}\n}\n```\n- this is a list item\n1. numered lists too\n1. just put ones if you like\n > Block quotes by using less than sign!\n**A little bit of bolded text as well**\n\n![Last but not least, a random pic as well](https://www.pexels.com/photo/blue-abstract-background-with-wavy-lines-on-white-surface-3737018/)'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <FormGroup className='inputField' >
          <FormLabel className='label'>Editor</FormLabel>
          <textarea id='editor' value= {this.state.input} onChange={this.handleChange}/>
        </FormGroup>
        
        <div className='preview'>
          <p>Previewer</p>
          <div id='preview' dangerouslySetInnerHTML={{__html:marked(this.state.input)}} />
        </div>
      </div>
    );
  }
}

export default App;
