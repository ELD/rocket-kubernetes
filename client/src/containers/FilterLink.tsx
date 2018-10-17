import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setVisibilityFilter, VisibilityFilters} from "../actions";
import Link from "../components/Link";
import {IAppState} from "../types/AppState";

interface IProps {
    filter: VisibilityFilters
}

const mapStateToProps = (state: IAppState, ownProps: IProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
