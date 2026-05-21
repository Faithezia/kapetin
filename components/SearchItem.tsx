import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { useIsMedium, useIsMobile } from "@/hooks/use-mobile";
import BillingMobile from "./BillingMobile";

const SearchItem = () => {
  const mobile = useIsMobile();
  const medium = useIsMedium();

  return (
    <div className="flex flex-row justify-between items-center p-3 ">
      <InputGroup className="max-w-xs h-10 p-2">
        <InputGroupInput placeholder="Search item" />
        <InputGroupAddon></InputGroupAddon>
        <Search color="grey" />
      </InputGroup>
      {(mobile || medium) && <BillingMobile />}
    </div>
  );
};

export default SearchItem;
