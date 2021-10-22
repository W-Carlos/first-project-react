import styled from 'styled-components'
import Background from '../../assets/bg-image.svg'


export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img `
    margin-top: 30px;
`;

export const InputLabel = styled.p `
    letter-spacing: -0.408px;

    color: #EEEEEE;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    margin-left: 25px;
`;

export const Input = styled.input `
    
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;

    color: white;

    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    outline: none;
    font-style: normal;
    font-weight: normal;

    font-size: 20px;
    line-height: 28px;
`;

export const Button = styled.button `
    width: 342px;
    height: 74px;
    margin-top: 130px;

    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 14px;
    border: none;
    outline: none;
    cursor: pointer;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`;

