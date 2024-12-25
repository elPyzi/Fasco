import '../assets/styles/style-pages/Homepage.scss';
import DealsOfMonth from '../components/DealsOfMonth/DealsOfMonth';
import Header from '../components/Header/HomePageHeader';

function Homepage() {
    return (
        <>
            <div className="container">
                <Header />
            </div>
            <DealsOfMonth />
        </>
    );
}

export default Homepage;
