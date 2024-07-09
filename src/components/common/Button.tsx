import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size: "medium" | "small";
    scheme: "primary" | "normal";
    disabled?: boolean;
}

const Button = ({ children, size, scheme, disabled, ...props }: Props) => {
    return (
        <ButtonStyle size={size} scheme={scheme} disabled={disabled} {...props}>
            {children}
        </ButtonStyle>
    )
};

const ButtonStyle = styled.button<Omit<Props, "children">> `
    font-size: ${({ theme, size }) => theme.button[size].fontSize};
    padding: ${({ theme, size }) => theme.button[size].padding};
    color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
    background-color: ${({ theme, scheme }) => theme.buttonScheme[scheme].backgroundColor};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`

export default Button;