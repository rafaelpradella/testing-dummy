import React, { useEffect, useState } from 'react';
import { View } from "react-native";

import styled from "styled-components/native";

export default function QuickResume({...props}){
    const [isLoading, setLoading] = useState(true);
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        getResumeData();
    },[])

    const getResumeData = () => {
        console.warn("Não carregou!");
    };

    const LoadedQuickResume = () => {
        return (
            <ResumeBlock {...props}>
		        <ResumeTitle>R$19,55</ResumeTitle>
	        </ResumeBlock>
        )
    };

	return (
        <View>
            { isLoading 
                ? <LoadingResume />
                : <LoadedQuickResume />
            }
        </View>
	);
};

const ResumeBlock = styled.TouchableOpacity`
    background-color: #7F39CD;
    border-radius: 6px;
    box-shadow: 0px 4px 12px rgba(132, 89, 180, 0.1);
    overflow: hidden;
    padding: 24px 16px;
    width: 100%
`;

const ResumeTitle = styled.Text`
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 8px;
`;

const LoadingResume = styled.View`
    background-color: rgba(0,0,0,.1);
    border-radius: 6px;
    width: 100%;
    height: 140px;
`