import { connect } from "react-redux";

function FunctionalComponent() {
	return <h1>This is a lazy functional component.</h1>;
}

const mapStateToProps = () => {
	return {};
};

// I know this should be using hooks instead
const WrappedComponent = connect(mapStateToProps, {})(FunctionalComponent);
export default WrappedComponent;
