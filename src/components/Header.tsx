import { logoutUser } from '../utils/authentication';
import { APP_LOGO_URL, USER_ICON } from '../utils/urls';

export const Header = () => {
    return (
        <div className='p-2 h-1/6 absolute z-10 right-0 left-0 bg-gradient-to-b from-black'>
            <img src={APP_LOGO_URL} alt='logo' className='m-2 h- w-28' data-testid='app-logo'/>
        </div>
    )
}

export const BrowseHeader = () => {
    const logOutHandler = (): void => {
        logoutUser();
     }
    
    return (<>
           <div className='h-screen'>
                <Header />
                <div className='fixed h-1/6 top-0 right-0 left-0 flex justify-end items-center bg-transparent z-30 mr-2'>
                    <img alt='userIcon' src={USER_ICON} className='m-2' />
                    <button onClick={logOutHandler} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"> Sign out </button>
                </div>
            </div>
       </>)
}
