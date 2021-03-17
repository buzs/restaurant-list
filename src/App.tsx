import React from "react";
import { Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/global";

import IngredientsContextProvider from "./contexts/IngredientListContext";

import Home from "./pages/Home";
import ShopList from "./pages/ShopList";

const App: React.FC = () => {
  return (
    <IngredientsContextProvider>
      <GlobalStyle />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shoplist" component={ShopList} />
      </Switch>
    </IngredientsContextProvider>
  );
}

export default App;