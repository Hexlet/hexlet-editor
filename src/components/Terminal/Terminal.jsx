import React from 'react';
import { connect } from 'react-redux';
import { Terminal as Term } from 'xterm';
import { FitAddon } from 'xterm-addon-fit'; 

const mapStateToProps = (state) => {
  const props = { outputText: state.text || '' };
  return props;
};

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.output = React.createRef();
  }

  componentDidMount() {
    const term = new Term();
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(this.output.current);
    fitAddon.fit();
    term.write(`$ ${this.props.outputText}`);
  }

  render() {
    return <div ref={this.output}></div>
  }
}

export default connect(mapStateToProps)(Terminal);
