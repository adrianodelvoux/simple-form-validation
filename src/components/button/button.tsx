import React, { ReactNode } from 'react';

import './button.scss';

interface IButtonProps {
    children: ReactNode;
}

const Button = ({ children }: IButtonProps) => (
    <button className="btn">
        { children }
    </button>
)

export default Button;