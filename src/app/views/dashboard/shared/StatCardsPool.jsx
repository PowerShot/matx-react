import React, { Component } from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Tooltip,
} from "@material-ui/core";

const StatCards = ({theme, farmers, total_xch, last_reward, block_height}) => {

  return (
    <Grid container spacing={3} className="mb-24">
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme.palette.primary.main
              }}
            >
              agriculture
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Farmers</small>
              <h1>{farmers}</h1>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme.palette.primary.main
              }}
            >
              toll
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Total XCH</small>
              <h1>{total_xch} XCH</h1>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme.palette.primary.main
              }}
            >
              event
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Last Reward</small>
              <h3>
              {last_reward}
              </h3>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme.palette.primary.main
              }}
            >
              view_in_ar
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Block Height</small>
              <h1>
                {block_height}
              </h1>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatCards;
