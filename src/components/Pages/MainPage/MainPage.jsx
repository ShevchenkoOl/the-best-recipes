import Navigation from '../../Ul/Navigation/Navigation';
import style from './mainPage.module.css';

const MainPage = () => {

    return (
        <div className={style.main}>
            <h1>Welcome to The Best Recipes</h1>
            <p>Discover the best recipes from around the world.</p>
            <Navigation />
        </div>
    )
};

export default MainPage;