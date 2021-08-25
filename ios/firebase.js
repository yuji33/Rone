import firebase from 'firebase';

// Firebase 初期化
const config = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
};
firebase.initializeApp(config);

// ユーザ登録
export const signup = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
        if (user) {
            console.log("Success to Signup")
        }
    })
    .catch(error => {
        console.log(error);
    })
}

// メール＆パスワードログイン
export const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
        alert("Login Success!");
    })
    .catch(error => {
        alert(error.message);
    });
}


export default firebase;

// ... 省略

// ユーザー登録の実装
import { signup } from 'tapioca/components/firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    // ユーザー登録のメソッド
    signUp = () => {
        const { email, password } = this.state;
        signup(email, password);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrap}>
                    <Text style={styles.label}>メールアドレス</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder="メールアドレスを入力してください"
                        placeholderTextColor="#777"
                    />
                </View>

                <View style={styles.inputWrap}>
                    <Text style={styles.label}>パスワード</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder="パスワードを入力してください"
                        placeholderTextColor="#777"
                    />
                </View>

                <View style={{paddingTop: 32}}>
                    <Button
                        title="送信"
                        onPress={() => this.signUp()} // ユーザー登録メソッドを実行
                    />
                </View>
            </View>
        )
    }
}

// ... 省略

export default Login;

// ユーザーログインの実装
import { login } from 'tapioca/components/firebase';

// ... 省略

    // ユーザーログインのメソッド
    login = () => {
        const { email, password } = this.state;
        login(email, password);
    }

// ... 省略