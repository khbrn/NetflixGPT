import { BACKGROUND_IMAGE_URL } from "../utils/urls";

const LoginBackground = () => {
    return (
        <div className='relative h-screen w-screen'>
            <img src={BACKGROUND_IMAGE_URL} alt='background-image' className='absolute inset-0 w-full h-full object-cover' data-testid='bg-image' />
            <div className='absolute inset-0 bg-black opacity-60'></div>
        </div>
    )
}

export default LoginBackground;