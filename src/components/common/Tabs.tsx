import React, { useState } from 'react'
import styled from 'styled-components';

interface TabProps {
    title: string;
    children: React.ReactNode;
};

interface TabsProps {
    children: React.ReactNode;
};

function Tab({ children }: TabProps) {
    return <>{children}</>
};

const Tabs = ({ children }: TabsProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

    return (
        <TabsStyle>
            <div className="tab-header">
                {tabs.map((tab, index) => (
                    <button onClick={() => setActiveIndex(index)}
                        className={activeIndex === index ? 'active' : ''}>
                        {tab.props.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeIndex]}
            </div>
        </TabsStyle>
    )
};

const TabsStyle = styled.div`
    .tab-header {
        display: flex;
        gap: 5px;
        border-bottom: 1px solid #ddd;

        button {
            border: none;
            background: #e7e7e7;
            cursor: pointer;
            font-size: 1.1rem;
            color: #1f1f1f;
            font-weight: bold;
            border-radius: 8px 8px 0 0;
            padding: 12px 24px;

            &.active {
                color: #fff;
                background: #0077B6;
            }
        }
    }

    .tab-content {
        padding-top: 30px;
    }
`

export { Tab, Tabs };