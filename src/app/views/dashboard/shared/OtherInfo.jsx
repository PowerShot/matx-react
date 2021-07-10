import React from "react";
import {
  Card
} from "@material-ui/core";

const to_string = function(s) {
  return (s === undefined || s === '' ? '-' : s.toString())
}
const OtherInfo = ({user_data}) => {
  return (
    <Card className="p-sm-24 mb-24">
      <Card elevation={0} className="bg-light-primary p-sm-24">
        <b>Launcher ID : </b> <small>{ to_string(user_data.launcher_id) }</small> <br/>
        <b>auth_public_key : </b> <small>{ to_string(user_data.authentication_public_key) }</small> <br/>
        <b>auth_public_key_timestamp : </b> <small>{ to_string(user_data.authentication_public_key_timestamp) }</small> <br/>
        <b>owner_public_key : </b> <small>{ to_string(user_data.owner_public_key) }</small> <br/>
        <b>target_puzzle_hash : </b> <small>{ to_string(user_data.target_puzzle_hash) }</small> <br/>
        <b>relative_lock_height : </b> <small>{ to_string(user_data.relative_lock_height) }</small> <br/>
        <b>p2_singleton_puzzle_hash : </b> <small>{ to_string(user_data.p2_singleton_puzzle_hash) }</small> <br/>
        <b>blockchain_height : </b> <small>{ to_string(user_data.blockchain_height) }</small> <br/>
        <b>singleton_coin_id : </b> <small>{ to_string(user_data.singleton_coin_id) }</small> <br/>
        <b>points : </b> <small>{ to_string(user_data.points) }</small> <br/>
        <b>difficulty : </b> <small>{ to_string(user_data.difficulty) }</small> <br/>
        <b>pool_payout_instructions : </b> <small>{ to_string(user_data.pool_payout_instructions) }</small> <br/>
        <b>is_pool_member : </b> <small>{ to_string(user_data.is_pool_member) }</small> <br/>
      </Card>
    </Card>
  );
};

export default OtherInfo;
