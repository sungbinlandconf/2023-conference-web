import { MainCopyrightMobile } from "./index.mobile";
import { MainCopyrightPc } from "./index.pc";

export function MainCopyright() {
    return (
        <>
            <MainCopyrightPc />
            <MainCopyrightMobile />
        </>
    );
}
