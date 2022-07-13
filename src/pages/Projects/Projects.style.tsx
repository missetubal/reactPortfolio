import styled, { keyframes } from "styled-components";

const animateC = keyframes`
    0% {transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
`
const animate = keyframes`
    0% {transform:rotate(45deg);}
    100%{transform:rotate(405deg);}
`

export const Container = styled.div`
    margin:0;
    padding:0;
    background:#262626;

`
export const Ring = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:190px;
    height:190px;
    background:transparent;
    border:3px solid #3c3c3c;
    border-radius:50%;
    text-align:center;
    line-height:190px;
    font-family:sans-serif;
    font-size:20px;
    color:black;
    letter-spacing:4px;
    text-transform:uppercase;
    text-shadow:0 0 10px #898987;
    box-shadow:0 0 20px rgba(0,0,0,.5);

    ::before{
        content:'';
        position:absolute;
        top:-3px;
        left:-3px;
        width:100%;
        height:100%;
        border:3px solid transparent;
        border-top:3px solid #fff000;
        border-right:3px solid #fff000;
        border-radius:50%;
        animation:${animateC} 2s linear infinite;
    }
`

export const Span = styled.span`
    display:block;
    position:absolute;
    top:calc(50% - 2px);
    left:50%;
    width:50%;
    height:4px;
    background:transparent;
    transform-origin:left;
    animation: ${animate} 2s linear infinite;
    ::before{
        content:'';
        position:absolute;
        width:16px;
        height:16px;
        border-radius:50%;
        background:#fff000;
        top:-6px;
        right:-8px;
        box-shadow:0 0 20px #fff000;
    }
`


