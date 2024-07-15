import styled from "styled-components";
import { BookDetail, BookRemind } from "../../models/model";
import Button from "../common/Button";
import { useState } from "react";
import { useBook } from "../../hooks/useBook";
import RemindItem from "./RemindItem";

interface Props {
    bookDetail: BookDetail;
    id: string;
};

const Remind = ({ bookDetail, id }: Props) => {
    const [remindText, setRemindText] = useState<string>('');
    const { reminds, addRemind } = useBook(id)

    return (
        <RemindStyle>
            <h2>인상깊은 구절</h2>
            <textarea value={remindText} onChange={(e) => setRemindText(e.target.value)} />
            <Button size="medium" scheme="primary" onClick={() => addRemind(id, remindText)}>
                등록하기
            </Button>
            <div>
                {reminds.map((remind, index) => (
                    <RemindItem key={index} context={remind} id={id} index={index} />
                ))}
            </div>
        </RemindStyle>
    )
};

const RemindStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 56.25rem;

    h2 {
        margin: 0;
    }

    textarea {
        min-height: 7rem;
        resize: none;
        padding: 1.5rem;
    }

    textarea::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    textarea:focus::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: transparent;
    }

    textarea:focus::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
    }
`

export default Remind;