

import React, { useState } from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import Reward from './src/pages/Reward';
import Detail from "./src/pages/Detail";

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <View style={{flex:1}}>
      {
        page == 1 ? (
          <Reward setPage={setPage} />
        ) : (
          <Detail setPage={setPage} />
        )
      }
    </View>
  );
};

export default App;
