import React from "react";
import styled from "styled-components";
import { MainScreen } from "./screen/main";

const Divver = styled.div`
    max-width: 100vw;
    overflow-x: hidden;
`;

function App() {
    return (
        <Divver>
            <MainScreen />
        </Divver>
    );
}

export default App;
