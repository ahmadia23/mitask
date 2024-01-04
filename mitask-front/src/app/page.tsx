import * as stylex from "@stylexjs/stylex";
import Image from "next/image";
import background from "/home-bg.jpg";

const styles = stylex.create({
  container: {
    // backgroundImage: `url('/home-bg.jpg')`,
    color: "red",
  },
});

export default function Home() {
  return (
    <div {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.container)}> hello word</p>
      hello word
      {/* <Image src={"/home-bg.jpg"} alt="test" width={400} height={200}></Image> */}
    </div>
  );
}
