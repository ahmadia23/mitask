import SideNav from "&/components/SideNav";
import styles from "&/app/home/home.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function LaunchpadLayout({ children }: Props) {
  return (
    <div className={styles.flexRow}>
      <SideNav />
      {children}
    </div>
  );
}
