import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import './HomePackages.css';
import GovtPackages from './GovtPackages/GovtPackages';
import EconomyPackages from './EconomyPackages/EconomyPackages';
import GamingPackages from './GamingPackages/GamingPackages';
import { Box, Container, Tab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import CorporatePackages from './CorporatePackages/CorporatePackages';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <p>{children}</p>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function HomePackages() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Container
            className="home-packages"
            maxWidth="xl"
            sx={{ bgcolor: 'background.paper', mt: '80px' }}
        >
            <Container>
                <AppBar
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        shadow: 'none',
                        border: 'none',
                    }}
                    position="static"
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        position="static"
                        textColor="inherit"
                        variant={
                            theme.breakpoints.up('md')
                                ? 'fullWidth'
                                : 'scrollable'
                        }
                        aria-label="full width tabs example"
                    >
                        <Tab label="Govt." {...a11yProps(0)} />
                        <Tab label="Economy" {...a11yProps(1)} />
                        <Tab label="Gaming" {...a11yProps(2)} />
                        <Tab label="Corporate" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
            </Container>
            <Box sx={{ mt: '20px' }}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <GovtPackages />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <EconomyPackages />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <GamingPackages />
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <CorporatePackages />
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </Container>
    );
}
