import { Box, Typography, Stack } from '@mui/material'
import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <Box >
            <Box sx={{
                height: 'calc(100vh -150px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5%',
                textAlign: 'center',
                padding: '10px',

            }} >
                <Typography variant='h4'>Page Not Found</Typography>
            </Box>
            <Box>
                <Typography variant='subtitle' textAlign="center">

                    Seems like you are following broken link
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" marginTop="20px">
                <Stack direction="row" spacing={3}>
                    <HomeIcon onClick={() => navigate("/")} />
                </Stack>
            </Box>
        </Box>
    )
}
export default PageNotFound


function HomeIcon(props) {
    return (
        <SvgIcon {...props}  >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function SvgIconsColor() {
    return (
        <Stack direction="coloum" spacing={3} padding="10px">
            <HomeIcon />

            <HomeIcon color="action" />
        </Stack>
    );
}

