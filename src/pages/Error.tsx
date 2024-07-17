import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';

type RouteError = {
    statusText?: string;
    message?: string;
};

const ErrorPage: React.FC = () => {
    const error = useRouteError() as RouteError;
    const navigate = useNavigate();

    return (
        <ErrorPageStyle>
            <h1>Oops!</h1>
            <p>예상치 못한 오류가 발생했습니다.</p>
            <Button size='medium' scheme='normal' onClick={() => navigate('/')}>메인 화면으로 돌아가기</Button>
        </ErrorPageStyle>
    );
};

const ErrorPageStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
`

export default ErrorPage;
