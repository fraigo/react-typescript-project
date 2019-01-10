import * as React from 'react';
import './Menu.css'

export interface IProps {
    className?: string;
    logo?: string;
    title?: string;
}

class Menu extends React.Component<IProps, any> {
  constructor(props: IProps){
    super(props);
  }
  public render() {
    const className = ['Menu-component', this.props.className].join(" ")
    return (
        <div className={className}>
            <div className="Menu-image">
                <img src={this.props.logo} className="Menu-logo Spin" alt="logo" />
                <div className="Menu-title">
                    {this.props.title}
                </div>
            </div>
            <div className="Menu-toolbar">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default Menu