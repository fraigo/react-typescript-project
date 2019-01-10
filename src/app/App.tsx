import * as React from 'react';
import logo from '../assets/images/logo.svg';
import DropDown from '../components/dropdown/DropDown';
import LoginButton from '../components/login/Button';
import Menu from '../components/menu/Menu';
import './css/Animations.css';
import './css/App.css';
import './css/Layout.css';
import './css/Themes.css';

export interface IProps {
  theme?: string
}

interface IState {
  currentTheme: string;
  currentUser: any;
}

class App extends React.Component<IProps, IState> {

  private themes = [
    {name:'default',title:'Default'},
    {name:'vivid',title:'Vivid'},
    {name:'lime',title:'Lime'},
    {name:'classic',title:'Classic'},
    {name:'black',title:'Black'}
  ]

  constructor(props: IProps){
    super(props);
    this.state = {
      currentTheme : this.props.theme ? this.props.theme : 'vivid',
      currentUser : {}
    }
  }

  get appClass() {
    return ["App", 'Theme', 'Theme-' + this.state.currentTheme, "Screen", "Light"].join(" ")
  }

  public setTheme = (name: string) => {
    this.setState({
      currentTheme : name
    })
  }

  public changeTheme = (name: string) => (event: any) => {
    this.setTheme(name)
  }

  public componentDidMount() {
    this.setTheme(this.state.currentTheme)
  }

  public onLogin = (user: any) => {
    this.setState({
      currentUser : user
    })
  }

  public render() {
    const themeSelection = {}
    {this.themes.map(item => (
      themeSelection[item.name] = item.title
    ))}
    return (
      <div className={this.appClass}>
        <Menu title="React App" logo={logo} className="Dark Menu-wrap">
          <DropDown caption="Themes">
            {this.themes.map(item => (
              <div key={item.name} onClick={ this.changeTheme(item.name) } >{item.title}</div>
            ))}
          </DropDown>
          <LoginButton onLogin={this.onLogin}>Log In</LoginButton>
        </Menu>
        <div className="App-content">
          <p className="Center">
            To get started, edit <code className="Color-secondary">src/app/App.tsx</code> and save to reload.
          </p>
          <p className="Center">
            {this.state.currentUser.name}
          </p>

        </div>
      </div>
    );
  }
}

export default App;
