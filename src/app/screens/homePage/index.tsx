import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CustomOrder } from "../../components/customOrder";

export function Home(){
    return <>
        <div className={"top"}>
            <Container className={"top-content"}>
                <Stack className={"top-content-left"}>
                    <Box className={"top-info"}>
                        <Box className={"top-info-first"}><h1>DRIVE YOUR</h1></Box>
                        <Box className={"top-info-second"}><h1>DREAM</h1><span>Unlock Your Journey with US</span></Box>
                    </Box>
                    <Box className={"divider"}>
                    </Box>
                    <Box  className={"find-car"}>
                        <NavLink to={"/cars"}>
                            <Button variant="contained" className={"find-button"} >FIND YOUR CAR</Button>
                        </NavLink>
                    </Box>
                
                </Stack>
                <Stack className={"top-content-right"}>
                    <Box className={"right-content"}>
                    <img src="/img/hero.png" alt="" />
                </Box>
                </Stack>
            </Container>
        </div>
        <Container className={"custom-order"}>
            <CustomOrder/>
        </Container>
    </>;
}
