import styled, { keyframes } from "styled-components";
import { GeneralStyleProps } from "../../types/general.types";
// import {bounce} from 'react-animation'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    @media screen and (max-width: 412px){
        flex-wrap: wrap;
    }
`

export const Left = styled.div`
    width: 60%;
    align-items: center;
    margin-left: 10%;
    @media screen and (max-width: 800px){
        width: 100%;
        margin-left: 90px;
    }
`

export const HelloContainer = styled.div`
    background: linear-gradient(90deg, #32F6F6 0%, #A6A79F 100%);
    border-radius: 50px 50px 50px 0px;
    max-width: 127px;
    max-height: 72px;
    animation: 2s ${keyframes `{bounce}`} infinity;
   
`
export const TextHello = styled.p`
    color: #FFFFFF;
    font-size: 1.3rem;
    text-align: center;
    align-items: center;
    padding: 14px 30px;
    font-weight: 700;
`

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width:1190px) {
        flex-direction: column;
    }
`

export const NameText = styled.p<GeneralStyleProps>`
    font-size: 60px;
    text-decoration: ${props => props.textDecoration || 'none'};
    color: ${props => props.color || '#000000'};
    font-weight: ${props => props.fontWeight || 400};
    line-height: 0;
    word-wrap: break-word;
    @media screen and (max-width: 412px){
        font-size: 10vw;
    }
`
export const Subtitle = styled.p`
    font-weight: 300;
    font-size: 30px;
    @media screen and (max-width: 412px){
        font-size: 6vw;
    }
    @media screen and (max-width: 850px) {
        margin-bottom: 10px;
    }
`

export const TextCotainer = styled.div`
    width: 100%;
    display: flex;
    @media screen and (max-width: 1020px) {
        flex-wrap: wrap;
    }
    @media screen and (max-width: 375px){
        font-size: 5vw;
    }
`

export const Right = styled.div`
    width: 40%;
    margin-right: 7%;
   
`
export const Memoji = styled.img`
    width: 100%;
    max-width: 560vh;
    height: 100%;
    max-height: 560vh;
`

export const MemojiImage = styled.div`
    width: 100%;
    height: 100%;
    max-width: 600px;
    min-width: 350px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 750px){
        margin-left: 25px;
    }  
`

export const ButtonContainer = styled.div`
    margin-top: 10%;
    width: 100%;
    
    @media screen and (max-width: 850px) {
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    @media screen and (max-width: 412px){
        width: 50%;
    }
`

export const CVButton = styled.a`
    background: linear-gradient(90deg, #DF580C 0%, #FD993D 100%);
    border: 3px solid #FFFFFF;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 14px;
    font-weight: 900;
    color: #FEFEFE;
    text-decoration: none;
    margin-right: 20px;
    text-align: center;
    min-width: 180px;

    @media screen and (max-width: 850px) {
        margin-bottom: 20px;
        width: 100%;
        font-size: 15px;
        padding: 15px 25px;
    }
`
export const GetInTouchButton = styled.a`
    background: linear-gradient(90deg, #434343 0%, #000000 100%);
    border: 3px solid #FFFFFF;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 14px 10px;
    font-weight: 900;
    color: #FEFEFE;
    text-decoration: none;
    max-width: 170px;
    text-align: center;
    min-width: 180px;

    @media screen and (max-width: 850px) {
        padding: 16px 28px;
        width: 100%;
        font-size: 15px;
    }
`