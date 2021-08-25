import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Hedda from '../share/Hedda';
import SearchBar from '../share/SearchBar';
import Menu from '../share/Menu';
import Columns from '../share/Columns';
import Category from'../share/Category';

import { View, Text, FlatList } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

//リスト用データ（実際にはAPIから取得することになるかと）
const list = [
    { id: 1, name: 'user1', email: 'user1@test.com', memo: 'memo1' },
    { id: 2, name: 'user2', email: 'user2@test.com', memo: 'memo2' },
    { id: 3, name: 'user3', email: 'user3@test.com', memo: 'memo3' },
    { id: 4, name: 'user4', email: 'user4@test.com', memo: 'memo4' },
    { id: 5, name: 'user5', email: 'user5@test.com', memo: 'memo5' },
]

class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, paddingVertical: 20 }}>
                {/* 一覧表示 */}
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.id + ' ' + item.name}
                            subtitle={item.email}
                            onPress={() => this.handleItemClick(item)}
                        />
                    )}
                />
            </View>
        );
    }

    handleItemClick = (item) => {
        //itemをDetailへ渡す
        this.props.navigation.navigate('Detail', item);
    }
}

export default Home;

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Hedda></Hedda>
    <SearchBar></SearchBar>
    <Menu></Menu>
    <Columns></Columns>
    <Category></Category>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Details画面に遷移する"
        onPress={() => {
          console.log('Press Home button');
          navigation.navigate('Details');
        }}
      />
    </View>
    </View>
  );
};

export default HomeScreen;