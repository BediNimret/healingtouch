import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

function SmallScreenMenu(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <div className="border-gray-200 justify-end">
      <div className="flex   shadow-md items-center bg-[#E5D2C4] border-[#800980] border-l-[32px] h-10">
        <h2 className="ml-5 text-black">{props.children}</h2>
      </div>
    </div>
  );
}

export default SmallScreenMenu;
