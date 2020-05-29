import React from 'react';

import { ButtonStyled } from './styles';

type Props = {
    children: any
    color?: "primary" | "accent",
    fontSize?: number,
    style?: React.CSSProperties | undefined
}

const Button: React.FC<Props> = (props) => {
    const defaultProps = {
        color: "primary",
        fontSize: 22,
        ...props
    };

    return <ButtonStyled {...defaultProps}>{props.children}</ButtonStyled>;
}

export default Button;