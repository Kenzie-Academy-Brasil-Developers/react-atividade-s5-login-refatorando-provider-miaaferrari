import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ProvidersProps {
    children: ReactNode;
    // history: History<LocationState>;
}

export const Providers = ({children}: ProvidersProps) => {

    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}