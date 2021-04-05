import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { Footer, PageContainer } from "../components";
import People from "./people";

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <People path="/" />
        </Router>
      </PageContainer>
      <Footer />
    </Fragment>
  );
}
