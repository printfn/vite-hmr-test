import { Component } from "react";
import { connect } from "react-redux";

interface Props {}

class ClassComponent extends Component {
	type: string;

	constructor(props: Props) {
		super(props);
		this.type = "class-based component";
	}
	render() {
		return <h1>This is a lazy {this.type}.</h1>;
	}
}

const mapStateToProps = () => {
	return {};
};

const WrappedComponent = connect(mapStateToProps, {})(ClassComponent);
export default WrappedComponent;
