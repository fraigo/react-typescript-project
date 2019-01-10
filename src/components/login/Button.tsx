import * as React from 'react';
import './Button.css'
import google from './google.js'

export interface IProps {
    className?: string;
    id?: string;
    onLogin?: (user: any) => void;
}

interface IState {
    enabled: boolean;
    user: any;
}

class Button extends React.Component<IProps, IState> {
  
  constructor(props: IProps){
    super(props);
    this.state = {
        enabled : false,
        user : {
            image: 'https://image.flaticon.com/teams/slug/google.jpg'
        }
    }
  }

  public toggle = () => (event:any) => {
    this.setState({
        enabled: !this.state.enabled
    })
  }

  public doLogin = () => (event: any) => {
    google.auth().signIn().then((googleUser:any) =>{
        const profile = googleUser.getBasicProfile()
        const user = {
            email: profile.getEmail(),
            image: profile.getImageUrl(),
            name: profile.getName(),
        }
        this.setState({
            user
        })
        if (this.props.onLogin){
            this.props.onLogin(user)
        }
    },() =>{
        // no action
    })
  }

  get getClass() {
    const classes = ['Button','Row']
    if (this.props.className){
        classes.push(this.props.className)
    }
    if (this.state.enabled){
        classes.push("Enabled")
    }
    return classes.join(" ")
  }

  public render() {
    return (
        <div className={this.getClass} >
            <div id="google-button"  >
                <img className="Button-image" onClick={this.doLogin()} src={this.state.user.image} title={this.state.user.name} />
            </div>
        </div>
    );
  }
}

export default Button