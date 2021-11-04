import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    border-radius: 8px;
    box-shadow: 1px 5px 68px 15px rgba(199,135,135,0.75);

    form {
        display: flex;
        flex-direction: column;

        span {
            font-size: 12px;
            font-weight: bold;
            color: blueviolet;
            width: 200px;
            bottom: 190px;
            background: beige;
            border-radius: 8px;
            padding: 5px;
        }
    }

    input {
        padding: 10px;
        width: 200px;
        color: #000;
        border: none;
        margin: 15px 0;
    }

    button {
    background-color: rgb(199,135,135);
    color: #000;
    width: 220px;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    margin: 15px 0;

    :hover {
        opacity: 0.9;
    }
    }
`;