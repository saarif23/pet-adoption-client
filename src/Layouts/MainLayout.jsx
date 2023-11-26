import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Header/Navbar";
import Container from "../Components/Shared/Container";

const MainLayout = () => {
    return (
        <div>
            <Container>
                <Navbar />
            </Container>
            <Outlet />
        </div>
    );
};

export default MainLayout;