import React from 'react';
import styled from 'styled-components';

type EmptyProps = {
    messageType: '즐겨찾기' | '읽는중' | '완독' | '검색결과';
};

const Empty: React.FC<EmptyProps> = ({ messageType }) => {
    let message = '';
    let icon = '';

    switch (messageType) {
        case '즐겨찾기':
            message = '즐겨찾기 서재가 비어있습니다. 검색을 통해 좋아하는 책에 하트를 눌러보세요!';
            icon = '✨'
            break;
        case '읽는중':
            message = '읽는 중 서재가 비어있습니다.';
            icon = '📖'
            break;
        case '완독':
            message = '읽은 책 서재가 비어있습니다.';
            icon = '📚'
            break;
        case '검색결과':
            message = '입력하신 검색어에 대한 검색 결과가 존재하지 않습니다.';
            icon = '📚'
            break;
        default:
            message = '내용이 없습니다.';
    }

    return (
        <EmptyStyle>
            <h2>{message} {icon}</h2>
        </EmptyStyle>
    );
};

const EmptyStyle = styled.div`

`

export default Empty;
