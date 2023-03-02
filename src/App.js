import * as React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import  dm01 from './dm01'
import  dm02 from './dm02'
import  dm03 from './dm03'
import  dmc01 from './dmc01'
import  dmc02 from './dmc02'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="main"
          >
            <Tab label="DM-01" {...a11yProps(0)} />
            <Tab label="DM-02" {...a11yProps(1)} />
            <Tab label="DM-03" {...a11yProps(2)} />
            <Tab label="DMC-01" {...a11yProps(3)} />
            <Tab label="DMC-02" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="photo-list">
            {dm01.map((url) => {
              return (
                <img src={url} className="photo-list-img"/>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="photo-list">
            {dm02.map((url) => {
              return (
                <img src={url} className="photo-list-img"/>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="photo-list">
            {dm03.map((url) => {
                  return (
                    <img src={url} className="photo-list-img"/>
                  );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="photo-list">
            {dmc01.map((url) => {
                  return (
                    <img src={url} className="photo-list-img"/>
                  );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="photo-list">
            {dmc02.map((url) => {
                return (
                  <img src={url} className="photo-list-img"/>
                );
            })}
          </div>
        </TabPanel>
      </Box>
      </header>
    </div>
  );
}

export default App;
