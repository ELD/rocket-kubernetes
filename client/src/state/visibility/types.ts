export enum VisibilityFilters {
    SHOW_ACTIVE = "SHOW_ACTIVE",
    SHOW_ALL = "SHOW_ALL",
    SHOW_COMPLETED = "SHOW_COMPLETED"
}

export interface IVisibilityFilters {
    readonly filter: VisibilityFilters
}

export type IVisibilityFiltersState = IVisibilityFilters;

export enum VisibilityFilterActionTypes {
    CHANGE_FILTER = "@@visibility_filter/CHANGE_FILTER"
}
