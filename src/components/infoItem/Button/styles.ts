import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    heigth: 50px;
    display: flex;
    background-color:#1550FF;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
        opacity: .8;
    }
`;

export const IconArea = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 15px;
`;

export const Icon = styled.img`
    height: 20px;
`;

export const Label = styled.div`
    height: 50px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`;