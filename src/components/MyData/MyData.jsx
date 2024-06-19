import { Button, Box, Container, Typography, Link } from "@mui/material";
import { useSelector } from "react-redux";



function MyData(){

const userData = useSelector(store=> store.user)
const monthlyInputs = useSelector(store=> store.financialInputs)

console.log('this is the user data', userData);
console.log('these are the monthly inputs', monthlyInputs);




    return(

      <Container>
        <Box>
            <Button variant="contained" sx={{ mb: 2, mr: 2}}>My Reports</Button>
        </Box>
        <Box>
            <Button variant="contained" sx={{ mb: 2, mr: 2}}>My Profile</Button>
        </Box>
        <Box>
            <Button variant="contained" sx={{ mb: 2, mr: 2}}>My Saved Inputs</Button>
        </Box>
        <Box>
        <Typography variant="h2" fontSize={32}>Alerts</Typography>

        
        </Box>


      </Container>


    )

}


export default MyData; 