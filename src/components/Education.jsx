import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import "@fontsource/roboto-mono";
import "../styles/Education.css";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <span className="MuiTabs-indicatorSpan" />,
    }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#ffee32",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    fontFamily: "Roboto Mono",
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.5)",
    "&.Mui-selected": {
      color: "#ffee32",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
    "&:hover": {
      color: "#ffee32",
      opacity: 1,
    },
  })
);

const StyledTypography = styled((props) => <Typography {...props} />)(
  ({ theme }) => ({
    fontFamily: "Roboto Mono",
    marginLeft: theme.spacing(2),
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledTypography sx={{ color: "white" }}>
            {children}
          </StyledTypography>
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Education(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="education-main">
      <div className="title">
        <h1>Experience & Education</h1>
      </div>

      <div className="exp-educ">
        <Box
          sx={{
            // flexGrow: 1,
            // bgcolor: "gray",
            display: "flex",
            padding: 5,
            width: 655,
            alignItems: "center",
          }}
        >
          <StyledTabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >
            <StyledTab label="Internship" {...a11yProps(0)} />
            <StyledTab label="Tertiary" {...a11yProps(1)} />
            <StyledTab label="Secondary" {...a11yProps(2)} />
            <StyledTab label="Primary" {...a11yProps(3)} />
          </StyledTabs>

          <TabPanel value={value} index={0}>
            <h3 id="org">Thirty One Digital Media Solutions Inc.</h3>
            <h4 id="position">Quality Assurance Intern</h4>
            <p id="year">August 2021 - September 2021</p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h3 id="org">Polytechnic University of the Philippines</h3>
            <h4 id="position">Bachelor of Science in Computer Engineering</h4>
            <p id="year">2018 - 2022</p>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h3 id="org">Malabon National High School</h3>
            <h4 id="position">
              Science, Technology, Engineering, and Mathematics
            </h4>
            <p id="year">2016 - 2018</p>

            <h4 id="position">Special Science Class</h4>
            <p id="year">2012 - 2016</p>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <h3 id="org">Muzon Elementary School</h3>
            <h4 id="position">Valedictorian</h4>
            <p id="year">2006 - 2012</p>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default Education;
