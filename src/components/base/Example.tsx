import * as React from 'react';
import './Example.css'

export interface IProps {
    className?: string;
}

interface IState {
    enabled: boolean;
}

class Example extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
        enabled : false
    }
  }
  public toggle = () => (event:any) => {
    this.setState({
        enabled: !this.state.enabled
    })
  }

  get getClass() {
    const classes = ['Example']
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
            {this.props.children}
        </div>
    );
  }
}

export default Example