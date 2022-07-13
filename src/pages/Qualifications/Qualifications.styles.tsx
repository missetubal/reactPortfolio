import styled from "styled-components";
import { GeneralStyleProps } from "../../types/general.types";

export const Container = styled.div`
    justify-content: space-between;
    display: flex;
    padding: 20px;
    @media screen and (max-width: 380px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`

export const Left = styled.div`

`

export const Memoji = styled.div`
    width: 100%;
`

export const Right = styled.div``

export const Title = styled.h1<GeneralStyleProps>`
    text-align: center;
    font-size: ${props=> props.fontSize || 30}px;
`
export const List = styled.ul``

export const Image = styled.img`
    width: 70%
`
