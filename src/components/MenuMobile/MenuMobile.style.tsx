import styled from "styled-components";

export const Container = styled.div`
    display: none;
    @media screen and (max-width:420px) {
        display: block;
        
    }
`

export const Pages = styled.a`
    margin: 0px 10px;
    font-size: 19px;
    text-decoration: none;
    color: #000000;
    text-align: right;
`

export const MenuOptions = styled.ul`
    display: flex;
    overflow: hidden;
    transition: 0.3s ease-in;
    flex-direction: column;
`

export const MenuButton = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    right: 20px;
    top: 50px;
    
`

export const SwitchColor = styled.a`
    align-items: center;
    cursor: pointer;
    position: absolute;
    right:60px;
    top: 40px;
`