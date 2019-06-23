import React, { useRef } from 'react';

import './input-field.scss';

export interface IInputFieldProps {
    label: string;
    value?: string;
    className?: string;
    onChange: any;
}

const InputField = ({ label, value, onChange, className }: IInputFieldProps) => {

    const inputEl = useRef<HTMLInputElement>(null);

    const onLabelClick = () => {
        if (inputEl != null && inputEl.current != null) {
            inputEl.current.focus()
        }
    }

    const classNames = [ 'field', 'input' ];

    if (className) classNames.push(className);

    return (
        <div className={classNames.join(' ')}>
            <label onClick={onLabelClick}>{ label }</label>
            <input
                ref={inputEl}
                type="text"
                value={value}
                onChange={(event: any) => onChange(event.target.value)}
            />
            <span></span>
        </div>
    )
}

export default InputField;