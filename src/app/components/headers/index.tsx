import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar(){
    const authMember = null;
    return <div className={"navbar"}>
        <Stack className={"navbar-inner"}>
            <Box className={"navbar-brand"}>
                <NavLink to="/">A1_motors</NavLink>
            </Box>
            <Stack className={"navbar-navlinks"}>
                <Box className={"hover-line"}>
                    <NavLink to="/" activeClassName={"underline"}>Home</NavLink>
                </Box>
                <Box className={"hover-line"}>
                    <NavLink to="/cars" activeClassName={"underline"}>Cars</NavLink>
                </Box>
                {   authMember ? (
                    <Box className={"hover-line"}>
                        <NavLink to="/orders" activeClassName={"underline"}>Orders</NavLink>
                    </Box>
                    ) : null
                }
                {   authMember ? (
                    <Box className={"hover-line"}>
                        <NavLink to="/member-page" activeClassName={"underline"}>My Page</NavLink>
                    </Box>
                    ) : null
                }
                <Box className={"hover-line"}>
                    <NavLink to="/help-page" activeClassName={"underline"}>Help</NavLink>
                </Box>
                {   !authMember ? (
                    <Box>
                        <Button variant="contained" style={{backgroundColor: "#3776CC", color: "#f8f8ff"}}>Login</Button>
                    </Box>
                    ) : (<img/>)
                }
            </Stack>
        </Stack>
    </div>
}