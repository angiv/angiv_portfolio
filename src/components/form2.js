import React, { Component, Fragment } from 'react';
import Form1 from "./form1";


const POSITIONS = [
    {
        id: 'logo',
        value: 'Logo Concept',
        title: 'Logo Concept',
    },
    {
        id: 'infographic',
        value: 'Infographic Design',
        title: 'Infographic Design',
    },
    {
        id: 'poster',
        value: 'Poster Design',
        title: 'Poster Design',
    },
    {
        id: 'sg',
        value: 'Study/Guide Layout',
        title: 'Study/Guide Layout',
    },
    {
        id: 'mg',
        value: 'Magazine Layout',
        title: 'Magazine Layout',
    },

]

class Form2 extends Component {

    state = {
        inputText:'',
        textareaText:'',
        selectText:'',
        showData: {
            name:'',
            textarea:'',
            position:'',
        }
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            inputText: value,
        })
    }

    handleTextareaChange = ({ target: { value } }) => {
        this.setState({
            textareaText: value,
        })
    }

    handleSelectChange = ({ target: { value } }) => {
        this.setState({
            selectText: value,
        })
    }

handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
        inputText: '',
        textareaText:'',
        selectText:'',
        showData: {
            name: inputText,
            text: textareaText,
            position: selectText,
        }
    })
}

render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
       <Fragment>

           <div className="contact-form-wrapper">
           
            <form>
            <div className="three-column">
            {/*Input */}
             <input 
                    type="text" 
                    placeholder="Name"
                    name="name" 
                    value={inputText}
                    onChange={this.handleInputChange}
                />
                  
                 <Form1 />


                 {/*Select */} 
                    <select value={selectText} onChange={this.handleSelectChange} className="select-element">
                        {POSITIONS.map(({ id, value, title }) => (
                        <option key={id} value={value}>{title}</option>
                         ))}
                 </select>
                 </div>
            </form>
            
            <form>
            {/*Textarea */} 
            <div className="one-column">
                <textarea
                    type="text"
                    name="message"
                    placeholder="Your message"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
             </div>

    
        </form>

        </div>

        
        <div className="button_wrapper">
                <button className="btn" type="submit">
                    Send
                </button>
        </div>
 
       </Fragment>

        );
    }
}


export default Form2;