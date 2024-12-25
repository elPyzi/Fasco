import { Link } from 'react-router-dom';
import Button from '../Buttons/Button/Button';
import Timer from './Timer/Timer';
import DealsSlide from './DealsSlide/DealsSlide';
import '../../assets/styles/style-components/DealsOfMonth.scss';

const DealsOfMonth = () => {
    return (
        <div className="deals-of-month" id="deals">
            <div className="container">
                <div className="deals-of-month-container">
                    <div className="deals-of-month__text-content">
                        <h2 className="deals-of-month__heading">
                            Deals of The Month
                        </h2>
                        <p className="deals-of-month__label">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Scelerisque duis ultrices sollicitudin aliquam
                            sem. Scelerisque duis ultrices sollicitudin
                        </p>
                        <Link to="/shop-page">
                            <Button padding="20px 70px" mb="50px">
                                Buy Now
                            </Button>
                        </Link>
                        <Timer />
                    </div>
                    <DealsSlide />
                </div>
            </div>
        </div>
    );
};

export default DealsOfMonth;
