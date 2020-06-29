import React from 'react';

interface NoHooksState {
  count: number;
  dark: boolean;
}

class NoHooks extends React.Component<{}, NoHooksState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0, dark: false };
  }

  componentDidMount() {
    console.log(`Count updated to ${this.state.count} without hooks`);
  }

  componentDidUpdate(prevProps: {}, prevState: NoHooksState) {
    if (prevState.count !== this.state.count)
      console.log(`Count updated to ${this.state.count} without hooks`);
  }

  render() {
    return (
      <div className={this.state.dark ? 'dark' : ''}>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <button onClick={() => this.setState({ dark: !this.state.dark })}>
          Toggle Dark Mode
        </button>
      </div>
    );
  }
}

export default NoHooks;
