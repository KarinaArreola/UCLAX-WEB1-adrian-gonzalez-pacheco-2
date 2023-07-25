import styled from 'styled-components';

// media query
import {useMediaQuery } from '@/Common/useMediaQuery';

// compents
import MediumLarge from './MediumLarge';
import Small from './Small';



const Header = () => {
    const {isMediumAndUp} = useMediaQuery();
    return (
        <HeaderStyled className="Header">
            {isMediumAndUp ? <MediumLarge/> : <Small />}
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header`

`;
