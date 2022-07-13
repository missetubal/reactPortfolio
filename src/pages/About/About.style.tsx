import styled from "styled-components";

export const Container = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 412px){
        flex-wrap: wrap;
    }
`

export const Left = styled.div`
   width: 100%;
`
export const MemoImage = styled.img`
    max-width: 540px;
    margin-left: 50px;
    
    @media screen and (max-width: 412px){
        width: 100%;
        margin: auto;
    }
    @media screen and (min-width: 768px){
        width: 100%;
    }
`
export const Right = styled.div`
    padding: 40px;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    margin-top: 20px;
    @media screen and (max-width: 768px){
        width: 80%;
        padding:auto;
    }
` 

export const Text = styled.p`
    width: 80%;
    text-align: justify;
`