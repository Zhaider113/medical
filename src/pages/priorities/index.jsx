import React from 'react'
// material-ui
import { Grid, Typography, Box, Container } from "@mui/material";


// project import
import MyResponsiveCirclePacking from "../../components/charts/cirlclePacking";
import { TowerA, TowerB, TowerC, TowerD } from "../../assets/mockData/data";
import { useState } from "react";
import Legends from "../../components/cards/Legends";
import LevelsCard from '../../components/cards/LevelsCard';

function Priorities() {
  // state for zoom ogf the node
  const [zoomState, setZoomState] = useState({});
  // state for the show details in card
  const [showDetails, setShowDetails] = useState(false);
  const [detailsNode, setDetailsNode] = useState(null);

  console.log("detailsNode", detailsNode);
  const towersData = [
    { id: "towerA", name: "Tower A", data: TowerA }
  ];

  const tabIndex = useSelector((state) => state.HeaderTab);

  return (
    <Container maxWidth="sm">
    <Grid container spacing={0}>
        {towersData.map((tower) => (
          <Grid item md={6} sm={12} key={tower.id}>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              {tower.name}
            </Typography>
            <Box sx={{ height: "50vh", position: "relative" }}>
              <MyResponsiveCirclePacking
                data={tower.data}
                setZoomedId={(nodeId) =>
                  setZoomState((prevState) => ({
                    ...prevState,
                    [tower.id]: nodeId,
                  }))
                }
                zoomedId={zoomState[tower.id]}
                setShowDetails={setShowDetails}
                showDetails={showDetails}
                setDetailsNode={setDetailsNode}
                detailsNode={detailsNode}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      {showDetails && (
        <Box sx={{ position: "absolute", top: 70, right: 1 }}>
          <LevelsCard numberOfLevel={1}/>
        </Box>
      )}
     <Box sx={{ position: "absolute", right: 10, bottom: 70 }}>
        <Legends/>
        </Box>
    </Container>
  )
}

export default Priorities