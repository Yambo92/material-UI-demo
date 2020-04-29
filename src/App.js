import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

import ProTip from './ProTip'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright ©"}
            <Link color="inherit" href="https://baidu.com">
                Baidu
            </Link>{" "}
            {new Date().getFullYear()}{'.'}
        </Typography>
    )
}

export default function App(){
    return (
        /* container=>div, maxWidth="sm"=>媒体查询屏幕尺寸超出600px之后的容器的最大宽度为600px */
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create React App example
                </Typography>
                <ProTip/>
                <Copyright/>
            </Box>
        </Container>
    )
}