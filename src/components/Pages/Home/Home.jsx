import Search from "../../Search/Search";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Search className='text-center' />
        </div>
    );
};

export default Home;