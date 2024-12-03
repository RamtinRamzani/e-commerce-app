import { Logo } from "../../assets/Svg";
import Tools from "./Tools";
import HeaderList from "./HeaderList";
import { BottomArrow } from "../../assets/icons";
import { Link } from "react-router-dom";
import MainContainer from "../MainContainer";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-0 w-full shadow-md bg-bg-color">
      <MainContainer className="flex items-center justify-between h-[60px]">
        <Logo />

        <ul className="flex items-center gap-4 ~text-sm/lg font-semibold capitalize">
          <HeaderList>
            <Link to="/">home</Link>
          </HeaderList>

          <HeaderList>
            <Link to="/shop">shop</Link>
            <BottomArrow />
          </HeaderList>

          <HeaderList>
            <span>product</span>
          </HeaderList>

          <HeaderList>
            <span>contact us</span>
          </HeaderList>
        </ul>

        <Tools />
      </MainContainer>
    </header>
  );
}
