import "./TabPanel.scss";

interface Props {
    children: React.ReactNode;
    value: any;
    name?: any;
}
const TabPanel = ({ children, value, name }: Props) => {
    if (value !== name) return null;
    return <div className="ui-tab-panel"> {children} </div>;
};
export default TabPanel;
