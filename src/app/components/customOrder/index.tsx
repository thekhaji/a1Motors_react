import { Stack } from "@mui/material";

export function CustomOrder(){
    return <Stack className={"order-form"}>
        <h1>ORDER YOUR CAR</h1>
        <form action="#" method="POST" className={"form"}>
            <div className={"top-input"}>
                <input type="text" placeholder="FIRST NAME"/>
                <input type="text" placeholder="PHONE NUMBER"/>
                <input type="select" placeholder="TYPE OF CAR"/>
            </div>
            <div className={"bottom-input"}>
                <input type="text" placeholder="CAR BRAND & MODEL"/>
                <input type="select" placeholder="IMPORT FROM"/>
                <input type="button" value="ORDER NOW" className={"order-button"}/>
            </div>
        </form>
    </Stack> ;
}