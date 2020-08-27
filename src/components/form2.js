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
            <form>
            {/*Input */}
            <label>
                Name:
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name" 
                    value={inputText}
                    onChange={this.handleInputChange}
                />
            </label>
            
            <Form1 />

            {/*Textarea */} <br />
            <label htmlFor="text">Text:</label>
            <textarea 
                id="text" 
                value={textareaText}
                onChange={this.handleTextareaChange}
                />

            {/*Select */} 
            <select value={selectText} onChange={this.handleSelectChange}>
                {POSITIONS.map(({ id, value, title }) => (
                    <option key={id} value={value}>{title}</option>
                 ) )}
            </select>

            {/*Button */} 
            <br />
            <button onClick={this.handleShow}>Sent</button>
        </form>

        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
       </Fragment>

        );
    }
}


export default Form2;