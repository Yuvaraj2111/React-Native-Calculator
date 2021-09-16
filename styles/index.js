import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const BaseView = styled.SafeAreaView`
    width:${WINDOW_WIDTH}px;
    height: ${WINDOW_HEIGHT}px;
    background-color: #000;
`;
export const TextBox = styled.View`
    width:${WINDOW_WIDTH}px;
    height: ${WINDOW_HEIGHT * .25}px;
    align-items: flex-end;
    justify-content: flex-end;
    padding:20px;
    `;
export const NumBox = styled.View`
    color: #fff;
    flex:2;
    width:${WINDOW_WIDTH}px;
    height: ${WINDOW_HEIGHT * .75}px;
    align-items: flex-end;

    `;
export const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width:100%;
    `
export const Keys = styled.View`
    border-radius: 100px;
    padding: 3px;
    border: 1px solid #000;
    width:${WINDOW_WIDTH / 4.3}px;
    height: ${WINDOW_WIDTH / 4}px;
    align-items: center;
    justify-content: center;
    margin-right:7px;
    margin-top: 5px;
    background:#ffffff;
    ${props => props.bg && css`
        background:#FF9EB7;
    `}
`;

export const NumText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    font-size: 21px;
`;