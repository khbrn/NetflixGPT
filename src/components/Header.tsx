import { APP_LOGO_URL } from '../utils/urls';

const Header = () => {
    return (
        <div className='p-2 absolute z-50 right-0 left-0 bg-gradient-to-b from-black'>
            <img src={APP_LOGO_URL} alt='logo' className='m-2 h- w-28' data-testid='app-logo'/>
        </div>
    )
}

export default Header;
