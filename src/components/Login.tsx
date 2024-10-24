import Header from "./Header";
import LoginBackground from "./LoginBackground";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
    return (
        <div className="relative h-screen w-screen">
            <Header />
            <LoginBackground />
            <LoginForm />
        </div>
    )
}

export default Login;
