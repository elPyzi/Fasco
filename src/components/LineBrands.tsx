import styled from 'styled-components';

const Brands = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 100px 0;

    img {
        max-width: 196px;
        margin: 10px;
    }
`;

const LineBrands = () => {
    return (
        <Brands>
            <img src="src\assets\images\brands icons\chanel.png" alt="Chanel" />
            <img
                src="src\assets\images\brands icons\LouisVuitton.png"
                alt="Louis Vuitton"
            />
            <img src="src\assets\images\brands icons\Prada.png" alt="Prada" />
            <img
                src="src\assets\images\brands icons\CalvinKlein.png"
                alt="Calvin Klein"
            />
            <img src="src\assets\images\brands icons\Denim.png" alt="Denim" />
        </Brands>
    );
};

export default LineBrands;
