import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;

`;

type IconProps = {
    opacity?: number;
}
export const Icon = styled.img<IconProps>`
    width: 40px;
    heigth:40px;
    opacity: ${props => props.opacity ?? 1};
`;