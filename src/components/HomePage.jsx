import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  AppBar,
  Container,
  Typography,
} from "@material-ui/core";

import UserCard from "./UserCard";
import newUser from "../utils/utils";

import logo from "../assets/images/convin.jpeg";
import blankAvatar from "../assets/images/blank_avatar.jpg";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      user: {
        id: 0,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        avatar: blankAvatar,
      },
    };
  }

  refresh(id) {
    newUser(id).then((data) => {
      this.setState({ user: data.data });
    });
  }

  renderButtons() {
    var ids = [];
    for (let id = 0; id < this.props.numUsers; id++) {
      ids.push(id + 1);
    }

    return ids.map((id) => {
      return (
        <Button
          style={{ backgroundColor: "#3f51b5", color: "white" }}
          variant="contained"
          onClick={() => {
            this.refresh(id);
          }}
        >
          {id}
        </Button>
      );
    });
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span
                class="container"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  height={50}
                  width={50}
                  style={{ marginRight: "10px" }}
                />
                Convin Assignment
              </span>
            </Typography>
          </Container>
        </AppBar>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh",
          }}
        >
          <div>
            <UserCard
              first_name={this.state.user.first_name}
              last_name={this.state.user.last_name}
              email={this.state.user.email}
              avatar={this.state.user.avatar}
            ></UserCard>
          </div>
          <div style={{ marginTop: "50px" }}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              {this.renderButtons()}
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
