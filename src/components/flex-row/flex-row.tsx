import React, { ReactNode } from 'react';

import './flex-row.scss';

interface IFlexRowProps {
    children: ReactNode;
}

const FlexRow = ({ children }: IFlexRowProps) => (
    <div className="flex-row">
        { children }
    </div>
)

export default FlexRow;