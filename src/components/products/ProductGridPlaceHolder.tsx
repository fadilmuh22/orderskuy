import { CircularProgress } from "@nextui-org/react";
import { FunctionComponent } from "react";

type Props = {
  isLoading: boolean;
  isEmpty: boolean;
  emptyMessage: string;
};
export const ProductGridPlaceHolder: FunctionComponent<Props> = ({
  isLoading,
  isEmpty,
  emptyMessage,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="flex flex-row justify-center items-center">
        <p className="text-gray-500 text-xl">{emptyMessage}</p>
      </div>
    );
  }
};
