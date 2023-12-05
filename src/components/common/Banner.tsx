import { Button, Link } from "@nextui-org/react";
import classNames from "classnames";

const bgUrl =
  "http://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const Banner = () => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center",
        "relative rounded-xl max-w-full min-w-[348px] min-h-[246px]",
        `bg-cover bg-[url('${bgUrl}')]`
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-green-500 opacity-80"></div>

      <div className="absolute top-0 rounded-tl-xl rounded-tr-xl w-full p-2 bg-black/20">
        <p className="text-white text-center font-bold">
          Order your favorite dishes now!
        </p>
      </div>

      <div className="h-full">
        <Button color="danger" variant="shadow" as={Link} href="/foods">
          Browse for Foods
        </Button>
      </div>
    </div>
  );
};
