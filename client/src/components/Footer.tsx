import * as React from "react";
import {Container} from "semantic-ui-react";
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../state/visibility/types";

class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Container>
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
            </Container>
        );
    }
}

export default Footer;
