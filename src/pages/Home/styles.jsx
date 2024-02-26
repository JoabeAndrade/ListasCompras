import styled from "styled-components";

export const Container = styled.div`
    background: #1a1919;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: #fff
    }

    input{
        height: 35px;
        border-radius: 5px;
        border: none;
        outline: none;
        padding-left: 10px;
        margin-top: 30px;
    }
`

export const AddButton = styled.button`
    background: #ffffff;
    color: #000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    margin-left: 10px;

    &:hover{
        opacity: 0.8;
    }
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    background: #2e2d2d;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p{
        color: #fff;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: bold;
        text-transform: capitalize;
    }

    button{
        background: transparent;
        cursor: pointer;
        border: none;
        font-size: 15px;
    }
`