import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// 「Tab1Screen」というコンポーネント（＝画面のようなもの）を定義
class Tab1Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>タブ1</Text>
      </View>
    );
  }
}

// 「Tab2Screen」というコンポーネント（＝画面のようなもの）を定義
class Tab2Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>タブ2</Text>
      </View>
    );
  }
}

// ＊ポイント
// `createBottomTabNavigator`で`Tab1`と`Tab2`の間をどのようなナビゲーションで結びつけるか設定
const RootStack = createBottomTabNavigator(
  {
    Tab1: Tab1Screen,
    Tab2: Tab2Screen,
  },
  {
    initialRouteName: 'Tab1',
  }
);

// メインで読み込まれる部分で、一つ上で作成した`RootStack`を表示するよう実装
export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}