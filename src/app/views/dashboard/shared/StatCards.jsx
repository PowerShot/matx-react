import React, { Component } from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Tooltip,
} from "@material-ui/core";

const StatCards = ({theme, personnal_netspace, total_payout, difficulty, last_proof_date, points}) => {
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
              folder
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Personnal Netspace</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">{personnal_netspace} TiB</h6>
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
              <small className="text-muted">Total payout</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">{total_payout} XCH</h6>
            </div>
          </div>
          <Tooltip title="Soon" placement="top">
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
              event
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Last proof</small>
              <h6 className="m-0 mt-4 font-weight-200">
                Difficulty : {difficulty}
              </h6>
              <h6 className="m-0 mt-4 text-primary font-weight-500">
                {last_proof_date}
              </h6>
            </div>
          </div>
          <Tooltip title="Soon" placement="top">
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
              functions
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Points</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">
                {points}
              </h6>
            </div>
          </div>
          <Tooltip title="Soon" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatCards;
