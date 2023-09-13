import React, {Component} from "react";

class Options extends Component {
    render () {
        const { options, selectedOption, onOptionChange} = this.props;
        return (
            <div>
                {options.map((option, index) => (
                    <div key={index}>
                        <input
                            type='radio'
                            name='option'
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                        />
                        <label>{option}</label>
                    </div>
                ))}
            </div>
        )
    }
    
}

export default Options;