export class DropDownMenuItem {
    label!: string;
    value!: any | undefined;
    link?: string;
    target?: string;
    onClick?: () => void;
}

export interface DropDownMenuProps {
    items: DropDownMenuItem[];
    value: string | undefined;
    defaultLabel?: string;
    [x: string]: any;
}
