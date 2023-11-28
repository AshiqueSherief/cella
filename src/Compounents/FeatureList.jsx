import React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import BatteryChargingFullRoundedIcon from "@mui/icons-material/BatteryChargingFullRounded";
import "./FeatureList.css";

const FeatureList = () => {
  return (
    <div class="feature container px-4 mx-auto md:flex justify-center bg-gray-200 ">
      <div className="md:flex w-screen md:pb-20 items-center md:flex-wrap md:mt-4">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="">
                  <div>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      <BatteryChargingFullRoundedIcon sx={{ fontSize: 150 }} />
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h5" component="div">
                      <b>
                        Long-Lasting
                        <br />
                        Battery
                      </b>
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="">
                  <div>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      <BatteryChargingFullRoundedIcon sx={{ fontSize: 150 }} />
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h5" component="div">
                      <b>
                        Long-Lasting
                        <br />
                        Battery
                      </b>
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="">
                  <div>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      <BatteryChargingFullRoundedIcon sx={{ fontSize: 150 }} />
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h5" component="div">
                      <b>
                        Long-Lasting
                        <br />
                        Battery
                      </b>
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="">
                  <div>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      <BatteryChargingFullRoundedIcon sx={{ fontSize: 150 }} />
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h5" component="div">
                      <b>
                        Long-Lasting
                        <br />
                        Battery
                      </b>
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FeatureList;
