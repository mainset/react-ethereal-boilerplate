import { Component, createElement } from 'react';

const splitCode = ({ resolve }) => {
  class SplitedCode extends Component {
    state = { module: null };

    async componentDidMount() {
      const { default: module } = await resolve();
      this.setState({ module });
    }

    render() {
      const { module } = this.state;

      // if (!module) return null;
      return module ? createElement(module) : null;
    }
  }

  return SplitedCode;
};

export default splitCode;
