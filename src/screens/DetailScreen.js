import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, ListItem, FormLabel, FormInput, Button } from 'react-native-elements';

class Detail extends React.Component {
    render() {

        //Homeから渡されたitemを受け取る（下記の様に受け取れる）
        const item = this.props.navigation.state.params;

        return (
            <View style={{ flex: 1, paddingVertical: 20 }}>
                <Card title='詳細データ'>
                    <FormLabel>ID</FormLabel>
                    <FormInput
                        value={item.id.toString()}
                        editable={false}
                    />
                    <FormLabel>Name</FormLabel>
                    <FormInput
                        value={item.name}
                        editable={false}
                    />
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        value={item.email}
                        editable={false}
                    />
                    <FormLabel>Memo</FormLabel>
                    <FormInput
                        value={item.memo}
                        editable={false}
                    />
                    <Button
                        title='戻る'
                        onPress={() => this.props.navigation.navigate('Home')}
                        buttonStyle={{ marginTop: 20 }}
                    />
                </Card>
            </View>
        );
    }
}

export default Detail;
const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Home画面に遷移する"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};
export default DetailScreen;