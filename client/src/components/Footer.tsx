import * as React from "react";
import {VisibilityFilters} from "../actions";
import FilterLink from "../containers/FilterLink";

class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <span>Show: </span>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                    All
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </div>
        );
    }
}

export default Footer;
