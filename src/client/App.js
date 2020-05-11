import React, { Component } from "react";
import HitItemComponent from "./components/HitItemComponent";
import {
  Layout,
  TopBar,
  LayoutBody,
  LayoutResults,
  ActionBar,
  ActionBarRow,
  SideBar,
  ViewSwitcherToggle,
  SearchBox,
  Hits,
  HitsStats,
  SelectedFilters,
  Pagination,
  ResetFilters,
} from "searchkit";
import "./app.css";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {}

  render() {
    return (
      <div>
        <Layout>
          <TopBar>
            <SearchBox />
          </TopBar>
          <LayoutBody>
            <SideBar></SideBar>
            <LayoutResults>
              <ActionBar>
                <ActionBarRow>
                  <HitsStats />
                  <ViewSwitcherToggle />
                </ActionBarRow>
                <ActionBarRow>
                  <SelectedFilters />
                  <ResetFilters />
                </ActionBarRow>
              </ActionBar>
              <Hits
                hitsPerPage={50}
                highlightFields={["title"]}
                sourceFilter={["title", "poster", "imdbId"]}
                mod="sk-hits-grid"
                itemComponent={HitItemComponent}
              />
              <Pagination />
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </div>
    );
  }
}
