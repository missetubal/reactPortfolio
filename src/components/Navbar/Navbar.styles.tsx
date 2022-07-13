import styled from 'styled-components'

export const NavContainer = styled.nav`
    padding: 19px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    @media screen and (max-width:420px) {
        padding-left:0px
    
    }
    
`
export const NavOptions = styled.ul`
    margin-right: 64px;
`
export const Pages = styled.a`
    margin: 0px 10px;
    font-size: 19px;
    text-decoration: none;
    color: #000000;
`
export const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const TextLeft = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    color: #000000;
    font-size: 18px;
    margin-left:20px;
`
export const NavRight = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width:420px) {
        display: none;
    
    }
   
`

export const SwitchColor = styled.a`
    align-items: center;
    cursor: pointer;
    margin-top: 10px;   
`

export const Image = styled.img`
    width: 35px;
    height: 40px;
`
