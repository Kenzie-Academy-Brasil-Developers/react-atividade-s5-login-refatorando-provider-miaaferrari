import '@lottiefiles/lottie-player';
// import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Button } from './style';
import { useAuth } from '../../Providers/Auth';


export const Dashboard = () => {

    const { logout } = useAuth()

    return (
        <div>
            <lottie-player 
                src="https://assets9.lottiefiles.com/packages/lf20_Ns4TLz.json"  
                background="transparent"  
                speed="1"  
                style={{width: "300px", height: "300px"}}  
                loop 
                autoplay>
            </lottie-player>
            <Button onClick={logout}>Logout</Button>
        </div>

    )
}