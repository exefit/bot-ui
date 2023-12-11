import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import Brandmark from "../../assets/Brandmark.svg";
import { Stack } from "@fluentui/react";
import { useContext, useEffect, useState } from "react";
import { HistoryButton } from "../../components/common/Button";
import { AppStateContext } from "../../state/AppProvider";
import { CosmosDBStatus } from "../../api";

const Layout = () => {
    const appStateContext = useContext(AppStateContext)

    const handleHistoryClick = () => {
        appStateContext?.dispatch({ type: 'TOGGLE_CHAT_HISTORY' })
    };

    useEffect(() => {}, [appStateContext?.state.isCosmosDBAvailable.status]);

    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <Stack horizontal verticalAlign="center" horizontalAlign="space-between"
                // className={styles.headerContainer}
                >
                    <Stack horizontal verticalAlign="center">
                        <Link to="https://exefit.ai" className={styles.headerTitleContainer}>
                            <img
                                src={Brandmark}
                                className={styles.headerIcon}
                                aria-hidden="true"
                            />
                        </Link>
                    </Stack>
                    <Stack horizontal tokens={{ childrenGap: 4 }}>
                            {(appStateContext?.state.isCosmosDBAvailable?.status !== CosmosDBStatus.NotConfigured) && 
                                <HistoryButton onClick={handleHistoryClick} text={appStateContext?.state?.isChatHistoryOpen ? "Hide history" : "Show history"}/>    
                            }
                    </Stack>

                </Stack>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;
