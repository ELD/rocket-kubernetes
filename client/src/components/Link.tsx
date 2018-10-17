import * as React from 'react';

interface IProps {
    active: boolean,
    children: HTMLElement,
    onClick: () => void,
}

class Link extends React.Component<any, any> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <button
                onClick={this.props.onClick}
                disabled={this.props.active}
                style={{
                    marginLeft: '4px',
                }}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Link;
