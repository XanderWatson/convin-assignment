import React from "react";
import { Card, CardContent, Box, Typography } from "@material-ui/core";

export default function UserCard({ first_name, last_name, email, avatar }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        style={{
          display: "inline-block",
          background: "#3f51b5",
          color: "white",
          width: "500px",
          height: "300px",
        }}
      >
        <CardContent>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            {first_name} {last_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {email}
          </Typography>
          <Box style={{ display: "inline-block" }}>
            <img
              src={avatar}
              alt="avatar"
              style={{ height: "150px", width: "150px", marginTop: "15px" }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
