import { connect } from "react-redux";

function FunctionalComponent() {
	return <h1>This is a functional component.</h1>;
}

const mapStateToProps = () => {
	return {};
};

const WrappedComponent = connect(mapStateToProps, {})(FunctionalComponent);
export default WrappedComponent;
