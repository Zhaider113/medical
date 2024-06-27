// material-ui
import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
// ==============================|| HEADER CONTENT - SEARCH ||============================== //
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CustomTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', ml: 10 }}>
            <Box sx={{display: 'flex', justifyContent:'start', alignItems: "center"}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab spacing={4} label="Wire Frame" {...a11yProps(0)} />
                    <Tab spacing={4} label="2D" {...a11yProps(1)} />
                    <Tab spacing={4} label="3D" {...a11yProps(2)} />
                </Tabs>
            </Box>
            {/* <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel> */}
        </Box>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};