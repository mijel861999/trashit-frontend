import styled from 'styled-components';

import akiraFont from '../../assets/fonts/akira.otf';

const handleSizeButton = size => {

}

const handleColorType = color => {
    switch ( color ) {
        case "black": 
            return "#000000";
        case "white":
            return "#FFFFFF";
        case "grey": 
            return "#585957";
        case "dark-grey":
            return "#585957";
    }
}

export const TrashitButton = styled.button`
    border: none; 
    background: ${ ({ background }) => handleColorType( background )};
    color: ${ ({ color }) => handleColorType( color ) };
    font-size: 20px;
    padding: 5px 30px;

`;