import styled from "styled-components";
import { BsXLg } from "react-icons/bs";
import { useBook } from "../../hooks/useBook";
import { DeleteBookRemind } from "../../models/model";

interface Props {
    context: string;
    id: string;
    index: number;
};

const RemindItem = ({ context, id, index }: Props) => {
    const {removeBookRemind} = useBook(id);

    return (
        <RemindItemStyle>
            <p className="delete" onClick={() => removeBookRemind(id, index)}><BsXLg /></p>
            <p>{context}</p>
        </RemindItemStyle>
    )
};

const RemindItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 0.7rem;
    padding-bottom: 1.5rem;
    margin: 0.8rem 0;
    background-color: #c2c2c242;

    p {
        margin: 0;
    }

    .delete {
        text-align: right;
        cursor: pointer;
        padding-right: 0.3rem;
    }
`

export default RemindItem;