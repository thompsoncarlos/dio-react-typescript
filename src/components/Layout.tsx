import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header title="Dio Bank" />
            { children }
            <Footer description="Developed by Carlos Thompson"/>
        </>
    )
}