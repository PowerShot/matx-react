import React, { Component, Fragment } from "react";
import {
  Grid,
  Card
} from "@material-ui/core";

import Leaderboard from "./shared/Leaderboard"
import StatCardsPool from "./shared/StatCardsPool";
import InfoPool from "./shared/InfoPool";
import Search from "./shared/Search";
import { withStyles } from "@material-ui/styles";


const format_int = function(x) {
  if(x == undefined) return -1;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

class Dashboard1 extends Component {
  state = {};

  componentDidMount() {
    fetch("https://api.frenchfarmers.net/miningpoolstat")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            block_height: result.data.lastBlocks[0].height,
            block_timestamp: result.data.lastBlocks[0].timestamp,
            pool_space: Math.round(result.data.poolStats.poolSpaceTiB),
            pool_farmers: result.data.poolStats.farmers,
            pool_fee_type: result.data.poolStats.currentFeeType,
            pool_fee_value: result.data.poolStats.currentFee,
            
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const pool_data = this.state;
    let { theme } = this.props;
    
    if (pool_data.error) {
      return (<div>Erreur : {pool_data.error.message}</div>);
    } else if (!pool_data.isLoaded) {
      // A améliorer
      return (<div>Chargement…</div>);
    } else {
      return (
        <Fragment>
          <div></div>
          <div className="pb-86 pt-30 px-30 bg-primary">
            <Search/>
          </div>

          <div className="analytics m-sm-30 mt--72">
            <Grid container spacing={3}>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <StatCardsPool farmers={format_int(pool_data.pool_farmers)} total_xch="-" last_reward="-" block_height={format_int(pool_data.block_height)} theme={theme}/>

                {/* Top Selling Products */}
                <Leaderboard/>

              </Grid>

              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Card className="px-24 py-16 mb-16">
                  <div className="card-subtitle">Pool Capacity</div>
                  <h1>{ format_int(pool_data.pool_space) } TiB</h1>
                  
                </Card>

                <InfoPool/>
              </Grid>
            </Grid>
          </div>
        </Fragment>
      );
    }
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
