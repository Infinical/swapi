import React, { Fragment, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { gql } from "@apollo/client";

export const LAUNCH_TILE_DATA = gql`
  fragment PersonTile on Person {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;

interface PeopleProps extends RouteComponentProps {}

const People: React.FC<PeopleProps> = () => {
  return <div />;
};

export default People;
