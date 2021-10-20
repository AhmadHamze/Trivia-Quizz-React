import { Button } from "./Button";

export default {
  title: "Fuctionality/Button",
  component: Button,
};

export const Navigation = () => <Button navigation={true}>Next</Button>;
export const Start = () => <Button navigation={false}>Start</Button>;
