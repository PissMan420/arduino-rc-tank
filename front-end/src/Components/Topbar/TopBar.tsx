import React from "react";
import BlankTopBarItem from "./BlankTopBarItem";
import "./TopBar.scss"
import { TopBarButton } from "./TopBarButton";
import { findIconDefinition, library } from "@fortawesome/fontawesome-svg-core"
import { faHome } from "@fortawesome/free-solid-svg-icons";

export interface TopBarProp
{
  children: JSX.Element[];
}

export function TopBar(props: TopBarProp)
{
  library.add(faHome);
  return (
    <div className="top-bar">
      <TopBarButton name="Menu principal" onClick={() => window.location.pathname = "/"} icon="home" />
      <BlankTopBarItem />
      {props.children}
    </div>
  );
}
