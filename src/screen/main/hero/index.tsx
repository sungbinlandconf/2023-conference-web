import { View } from "../../../components/view";
import { MainHeroMobile } from "./hero.mobile";
import { MainHeroPc } from "./hero.pc";

export function MainHero() {
    return (
        <div id="hero">
            <View.Pc>
                <MainHeroPc />
            </View.Pc>
            <View.Mobile>
                <MainHeroMobile />
            </View.Mobile>
        </div>
    );
}
