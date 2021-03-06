import React from 'react';
import './index.less';
export default class Menu extends React.Component {

    static displayName = 'Menu';

    // static propTypes = {
    //     children: React.PropTypes.node,
    //     title: React.PropTypes.node,
    //     subHeight: React.PropTypes.string,
    //     style: React.PropTypes.object
    // }




    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
        }
    }

    componentDidMount() {
    }
    titleClick = () => {
        const { openMenu } = this.state;
        this.setState({
            openMenu: !openMenu
        })
    }

    render() {

        const { style, children, title, subHeight } = this.props;
        const { openMenu } = this.state;
        let selectStyle = {
            transform: "rotateZ(-90deg)"
        }
        let contentStyle = {
            height: 0,
            overflow: "hidden",
            padding: '0px 10px'
        };
        if (openMenu) {
            selectStyle.transform = "rotateZ(0deg)";
            contentStyle.height = subHeight || 'auto'
            contentStyle.padding = "10px"

        }

        return (
            <div className='ui-menu' style={style || {}}>
                <div
                    className="title"
                    onClick={this.titleClick}
                >
                    {title || ''}
                    <div
                        className="select"
                        style={selectStyle}
                    >
                    </div>
                </div>
                <div className="content" style={contentStyle}>
                    {children}
                </div>

            </div>
        );
    }
}
