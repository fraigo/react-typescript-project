import * as React from 'react';
import './DropDown.css'

export interface IProps {
    className?: string;
    caption: string;
}

interface IState {
    opened: boolean;
}

class DropDown extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
        opened : false
    }
  }
  public toggle = () => (event:any) => {
    this.setState({
        opened: !this.state.opened
    })
  }

  get getClass() {
    const classes = ['DropDown']
    if (this.props.className){
        classes.push(this.props.className)
    }
    if (this.state.opened){
        classes.push("DropDown-opened")
    }
    return classes.join(" ")
  }

  public render() {
    return (
        <div className={this.getClass}>
            <div onClick={this.toggle()} >{this.props.caption}</div>
            <div className="DropDown-content" onClick={this.toggle()}>
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default DropDown