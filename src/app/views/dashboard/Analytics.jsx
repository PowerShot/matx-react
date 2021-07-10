import React, { Component, Fragment } from "react";
import {
  Grid,
  Card
} from "@material-ui/core";
import {useLocation} from "react-router-dom";
import DoughnutChart from "../charts/echarts/Doughnut";
import ReactVirtualizedTable from "./shared/ListData"
import LastPayement from "./shared/LastPayement"
import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import Alert from '@material-ui/lab/Alert';
import TableCard from "./shared/TableCard";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import OtherInfo from "./shared/OtherInfo";
import Campaigns from "./shared/Campaigns";
import { withStyles } from "@material-ui/styles";
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Search from "./shared/Search";

const format_int = function(x) {
  if(x == undefined) return -1;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const get_id = function() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if(id == undefined) return -1;
  return id.replace('0x','');
}

const ts_to_hour = function(timestamp) {
  var d = new Date(timestamp).getDate();
  var m = new Date(timestamp).getMonth() + 1;

  d = (d<10) ? '0' + d : d;
  m = (m<10) ? '0' + m : m;

  var output = d + '/' + m;
  return output;
}


class Dashboard1 extends Component {
  state = {};
  
  componentDidMount() {
    fetch("https://api.frenchfarmers.net/farmer/" + get_id())
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            launcher_id: result.launcher_id,
            auth_public_key: result.authentication_public_key,
            auth_public_key_timestamp: result.authentication_public_key_timestamp,
            owner_public_key: result.owner_public_key,
            target_puzzle_hash: result.target_puzzle_hash,
            relative_lock_height: result.relative_lock_height,
            p2_singleton_puzzle_hash: result.p2_singleton_puzzle_hash,
            blockchain_height: result.blockchain_height,
            singleton_coin_id: result.singleton_coin_id,
            points: result.points,
            difficulty: result.difficulty,
            pool_payout_instructions: result.pool_payout_instructions,
            is_pool_member: result.is_pool_member
            
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    
      fetch("https://api2.chiaexplorer.com/chart/xchPriceChart?period=1m")
      .then(res => res.json())
      .then(
        (result) => {
          let hours_netspace_api = result.timestamp.map(ts_to_hour);
          this.setState({
            chia_explorer: {
              data_netspace: result.data.reverse(),
              hours_netspace: hours_netspace_api.reverse()
            }
          });
        },
        (error) => {
          this.setState({
            error_netspace: error
          });
        }
      )

      fetch("https://api.frenchfarmers.net/miningpoolstat")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            block_height: result.data.lastBlocks[0].height,
            block_timestamp: result.data.lastBlocks[0].timestamp,
            pool_space: Math.round(result.data.poolStats.poolSpaceTiB),
            pool_farmers: result.data.poolStats.farmers,
            pool_fee_type: result.data.poolStats.currentFeeType,
            pool_fee_value: result.data.poolStats.currentFee,
            
          });
        },
        (error) => {
          this.setState({
            error_pool: error
          });
        }
      )
  }

  render() {
    let { theme } = this.props;
    const user_data = this.state;
    const chia_data = this.state.chia_explorer;
    
    if (user_data.error) {
      return (<div>Erreur : {user_data.error.message}</div>);
    } else if (!user_data.isLoaded) {
      // A améliorer
      return (<div>Chargement…</div>);
    } else {
      return (
        <Fragment>
          
          <div className="pb-86 pt-30 px-30 bg-primary">
            <Search/>
            <ModifiedAreaChart
              height="280px"
              option={{
                series: [
                  {
                    data: (chia_data == undefined ? null : chia_data.data_netspace),
                    type: "line"
                  }
                ],
                xAxis: {
                  data: (chia_data == undefined ? null : chia_data.hours_netspace)
                }
              }}
            ></ModifiedAreaChart>
          </div>

          <div className="analytics m-sm-30 mt--72">
            <Grid container spacing={3}>
              <Grid item lg={8} md={8} sm={12} xs={12}>

                <StatCards
                  personnal_netspace="-"
                  total_payout="-"
                  difficulty={user_data.difficulty}
                  last_proof_date="-"
                  points={user_data.points}

                  theme={theme}/>

                {/* Top Selling Products */}
                <Alert severity="info">
                  <b>Your reward adress : </b><small>-</small>
                </Alert>
                <LastPayement/>

              </Grid>

              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Card className="px-24 py-16 mb-16">
                  <div className="card-subtitle">Pool Capacity</div>
                  <div className="card-title">{format_int(user_data.pool_space)} TiB</div>
                  <DoughnutChart
                    my_netspace={0.1}
                    pool_netspace={(user_data.pool_space == undefined ? 0.1: user_data.pool_space)}
                    height="300px"
                    color={[
                      theme.palette.primary.dark,
                      theme.palette.primary.main,
                      theme.palette.primary.light
                    ]}
                  />
                </Card>

                <OtherInfo
                  user_data={user_data}
                  />


              </Grid>
            </Grid>
          </div>
        </Fragment>
      );
    }
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
