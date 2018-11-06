import {connect} from "react-redux";
import {Dispatch} from "redux";
import Link from "../components/Link";
import {IApplicationState} from "../state";
import {changeFilter} from "../state/visibility/actions";
import {VisibilityFilters} from "../state/visibility/types";

interface IProps {
    filter: VisibilityFilters
}

const mapStateToProps = (state: IApplicationState, ownProps: IProps) => ({
    active: ownProps.filter === state.visibility.filter
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IProps) => ({
    onClick: () => dispatch(changeFilter({filter: ownProps.filter}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
