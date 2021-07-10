import React, { Component } from "react";
import {
  Card,
  Button
} from "@material-ui/core";

const InfoPool = () => {
  return (
    <Card className="p-sm-24 mb-24">
      <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24">
        <b>URL : </b> pool01.frenchfarmers.net <br/>
        <b>fees : </b> 0.1%<br/>
        <b>discord : </b> <a href="https://discord.gg/t5aKtAKkB3"><u>discord.gg/t5aKtAKkB3</u></a><br/>
      </Card>
    </Card>
  );
};

export default InfoPool;
