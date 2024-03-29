import { DetailsListProps } from "./DetailsList.interface";

import "./DetailsList.scss";

const DetailsList = ({ list }: DetailsListProps) => {
    return (
        <>
            <div className="details-list">
                <div className="details-list-items">
                    {list?.map((item, index) => (
                        <div className="details-list-item" key={index}>
                            <div className="details-list-item-title">{item.title}</div>
                            <div className="details-list-item-value">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default DetailsList;
